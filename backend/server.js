// Configuração do Servidor

import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; // Exemplo de importação de rotas

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Permite o uso de JSON no corpo das requisições
app.use(cors()); // Habilita o CORS para permitir requisições de origens diferentes

// Conectar ao MongoDB
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB conectado');
})
.catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra o processo Node com erro
});

// Rotas
app.use('/api/auth', authRoutes); // Exemplo de uso de rotas

// Porta de execução
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
