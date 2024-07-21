// Configuração das Rotas

// Importando os módulos necessários
import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

// Criando o roteador usando Express
const router = express.Router();

// Definindo as rotas
router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);

// Exportando o roteador
export default router;

