// Configuração do Servidor

import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; // Exemplo de importação de rotas
import path from 'path';
import bodyParser from 'body-parser';


// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Permite o uso de JSON no corpo das requisições
app.use(cors()); // Habilita o CORS para permitir requisições de origens diferentes
app.use(bodyParser.json());


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

// Rotas - Servir arquivos estáticos
app.use('/api/auth', authRoutes); // Exemplo de uso de rotas
app.use('/estrutura', express.static(path.join(__dirname, 'estrutura')));
app.use('/cadastro', express.static(path.join(__dirname, 'cadastro')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'estrutura', 'home.html'));
});

// Rota para cadastro
app.post('/api/register', (req, res) => {
    const { name, lastname, email, password, confirm_password } = req.body;

    // Aqui você pode adicionar lógica para salvar os dados em um banco de dados
    console.log(`Nome: ${name}, Sobrenome: ${lastname}, Email: ${email}, Senha: ${password}, Confirmar Senha: ${confirm_password}`);

    res.json({ message: 'Cadastro realizado com sucesso!' });
});

// Iniciar o servidor - Porta de execução
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
