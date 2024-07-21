import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import postosColetaRoutes from './src/routes/postosColetaRouter.js';
import blogRouter from './src/routes/blogRouter.js';
import supportRouter from './src/routes/supportRouter.js';
import infoRouter from './src/routes/infoRouter.js'; // Novo roteador de informações

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/postos-coleta', postosColetaRoutes);
app.use('/api/blog', blogRouter);
app.use('/api/support', supportRouter);
app.use('/api/info', infoRouter); // Adiciona o roteador de informações

export default app;
