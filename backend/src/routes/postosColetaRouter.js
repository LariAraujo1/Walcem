import express from 'express';  // Importa o framework Express para criar rotas
const router = express.Router();  // Cria um objeto Router do Express para gerenciar rotas

import { listarPostosColeta, cadastrarPostoColeta, 
         atualizarPostoColeta, deletarPostoColeta } from '../controllers/postosColetaController.js';
// Importa os métodos dos controllers responsáveis por lidar com as requisições HTTP

// Rota para listar todos os postos de coleta
router.get('/', listarPostosColeta);

// Rota para cadastrar um novo posto de coleta
router.post('/', cadastrarPostoColeta);

// Rota para atualizar um posto de coleta pelo ID
router.put('/:id', atualizarPostoColeta);

// Rota para deletar um posto de coleta pelo ID
router.delete('/:id', deletarPostoColeta);

export default router;


