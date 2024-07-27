import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

// Carrega as variáveis de ambiente do arquivo .env para o processo do Node.js
dotenv.config();

// Definindo uma função assíncrona chamada connectDB para conectar ao MongoDB
const connectDB = async () => {
  try {
    // Conectando ao MongoDB usando a URI definida na variável de ambiente MONGO_URI
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB conectado'); // Mensagem de sucesso ao conectar
  } catch (err) {
    // Capturando e tratando erros caso ocorra algum problema na conexão
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1); // Encerrando o processo Node.js com código de erro 1 em caso de falha na conexão
  }
};

// Conectando ao banco de dados e iniciando o servidor
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
