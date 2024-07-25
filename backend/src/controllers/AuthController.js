import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Registrar um novo usuário
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, userType } = req.body;

  // Verificar se o usuário já existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Criptografar a senha
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Criar um novo usuário
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    userType,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// Login do usuário
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Verificar se o usuário existe
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    // Gerar o token JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Logout do usuário
export const logoutUser = asyncHandler(async (req, res) => {
  // Para invalidar o token, você pode usar uma lista de tokens revogados ou simplesmente deixar o token expirar
  // Aqui apenas retornamos uma resposta de sucesso
  res.status(200).json({ message: 'Logout successful' });
});

// Verificar token
export const verifyToken = asyncHandler(async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(401);
    throw new Error('No token provided');
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true, decoded });
  } catch (error) {
    res.status(401);
    throw new Error('Invalid token');
  }
});

// Recuperar senha
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Gerar um token de reset de senha
  const resetToken = crypto.randomBytes(20).toString('hex');
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hora
  await user.save();

  // Enviar o email com o token de reset
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: email,
    from: 'passwordreset@yourapp.com',
    subject: 'Password Reset',
    text: `You are receiving this because you (or someone else) has requested to reset the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      http://${req.headers.host}/reset/${resetToken}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.`,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: 'Password reset email sent' });
});

// Resetar senha
export const resetPassword = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Password reset token is invalid or has expired');
  }

  // Criptografar a nova senha
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ message: 'Password has been reset' });
});
