import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

// Função para registrar um novo usuário
const registerUser = asyncHandler(async (req, res) => {
  // Lógica de registro
});

// Função para autenticar o usuário
const authUser = asyncHandler(async (req, res) => {
  // Lógica de autenticação
});

// Função para verificar o token
const verifyToken = asyncHandler(async (req, res) => {
  // Lógica de verificação do token
});

export { registerUser, authUser, verifyToken };
