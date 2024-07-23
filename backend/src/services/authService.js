// authService.js
//funcionalidades futuras como envio de e-mails, etc.

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

// Registrar um novo usuário
export const registerUser = async (userData) => {
  const { name, email, password, userType } = userData;

  // Verificar se o usuário já existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Criar novo usuário
  const user = new User({ name, email, password: hashedPassword, userType });
  await user.save();
  return user;
};

// Autenticar o usuário
export const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Gerar token JWT
  const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, user };
};

// Recuperar informações do usuário
export const getUserById = async (userId) => {
  return await User.findById(userId);
};
