const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir arquivos estáticos
app.use('/estrutura', express.static(path.join(__dirname, 'estrutura')));
app.use('/cadastro', express.static(path.join(__dirname, 'cadastro')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'estrutura', 'index.html'));
});

// Rota para cadastro
app.post('/api/register', (req, res) => {
    const { name, lastname, email, password, confirm_password } = req.body;

    // Aqui você pode adicionar lógica para salvar os dados em um banco de dados
    console.log(`Nome: ${name}, Sobrenome: ${lastname}, Email: ${email}, Senha: ${password}, Confirmar Senha: ${confirm_password}`);

    res.json({ message: 'Cadastro realizado com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
