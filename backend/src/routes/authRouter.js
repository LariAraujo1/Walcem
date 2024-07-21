import express from 'express';
import { registerUser, authUser, verifyToken } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', registerUser);

// Rota para login de usuário
router.post('/login', authUser);

// Rota para verificar o token (protegida)
router.get('/verify', protect, verifyToken);

export default router;
