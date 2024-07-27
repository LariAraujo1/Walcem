import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import userRouter from './src/routes/userRouter.js';
import authRouter from './src/routes/authRouter.js';

// Configura as variáveis de ambiente
dotenv.config();

const app = express(); // Inicializa o app com express

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Inicialização do Passport
app.use(passport.initialize());

// Definição das rotas
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

export default app;
