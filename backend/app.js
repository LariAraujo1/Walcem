import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from '../backend/src/config/db.js'; // Ajuste o caminho conforme necessário
import passport from './src/config/passport.js';

// Importação das rotas
import postosColetaRoutes from './src/routes/postosColetaRouter.js';
import blogRouter from './src/routes/blogRouter.js';
import supportRouter from './src/routes/supportRouter.js';
import infoRouter from './src/routes/infoRouter.js'; // Novo roteador de informações
import authRouter from './src/routes/authRouter.js';
import userRouter from './src/routes/userRouter.js';


// Importação da configuração do Passport

connectDB();
passport();
dotenv.config();

const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Inicialização do Passport
app.use(passport.initialize());

// Definição das rotas
app.use('/api/postos-coleta', postosColetaRoutes);
app.use('/api/blog', blogRouter);
app.use('/api/support', supportRouter);
app.use('/api/info', infoRouter); // Adiciona o roteador de informações
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);


export default app;
