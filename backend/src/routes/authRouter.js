import express from 'express';
import { registerUser, authUser, verifyToken } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const authRouter = express.Router();

// Rota para registrar um novo usuário
authRouter.post('/register', registerUser);

// Rota para login de usuário
authRouter.post('/login', authUser);

// Rota para verificar o token (protegida)
authRouter.get('/verify', protect, verifyToken);

export default authRouter;
