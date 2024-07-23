import express from 'express'; // Importa o framework Express para criar o servidor
import dotenv from 'dotenv'; // Importa o pacote dotenv para gerenciar variáveis de ambiente
import bodyParser from 'body-parser'; // Importa o body-parser para processar dados de entrada JSON
import cors from 'cors'; // Importa o pacote cors para permitir solicitações de diferentes origens
import postosColetaRouter from './src/routes/postosColetaRouter.js'; // Importa as rotas para postos de coleta
import supportRouter from './src/routes/supportRouter.js'; // Importa as rotas para suporte
import infoRouter from './src/routes/infoRouter.js'; // Importa as rotas para informações
import geocodificacaoRouter from './src/routes/geocodificacaoRouter.js'; // Importa as rotas para geocodificação
import commentRoutes from './src/routes/commentRoutes.js'; // Importa as rotas para comentários
import blogRouter from './src/routes/blogRouter.js'; // Importa as rotas para administração


// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express(); // Cria uma instância do aplicativo Express

app.use(cors()); // Habilita CORS para permitir requisições de diferentes origens
app.use(bodyParser.json()); // Configura o body-parser para processar dados JSON enviados no corpo das requisições

// Define as rotas para a API de postos de coleta
app.use('/api/postos-coleta', postosColetaRouter);

// Define as rotas para a API de suporte
app.use('/api/suporte', supportRouter);

// Define as rotas para a API de informações
app.use('/api/info', infoRouter);

// Define as rotas para a API de geocodificação
app.use('/api/geocodificacao', geocodificacaoRouter);

// Define as rotas para a API de comentários
app.use('/api/comentarios', commentRoutes);

// Define as rotas para a API de administração
app.use('/api/blog', blogRouter);

// Exporta a instância do aplicativo para ser utilizada em outros arquivos (como o servidor)
export default app;
