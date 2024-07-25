import express from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const router = express.Router();

// Função para registrar um novo usuário
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Verifica se todos os campos estão preenchidos
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Por favor, preencha todos os campos');
  }

  // Verifica se o usuário já existe
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Usuário já existe');
  }

  // Criptografa a senha
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Cria um novo usuário
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Dados do usuário inválidos');
  }
});

// Função para autenticar o usuário
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Credenciais inválidas');
  }
});

// Função para verificar o token
export const verifyToken = asyncHandler(async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    res.status(401);
    throw new Error('Token não fornecido');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    res.json({ valid: true });
  } catch (error) {
    res.status(401);
    throw new Error('Token inválido');
  }
});

// Função para gerar token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default router;
