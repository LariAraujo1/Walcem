
import express from 'express';
import {
  listarPostosColeta,
  buscarPostoColetaPorId,
  cadastrarPostoColeta,
  atualizarPostoColeta,
  deletarPostoColeta,
  buscarPostosProximos
} from '../controllers/postosColetaController.js';

const router = express.Router();

router.get('/postos', listarPostosColeta);
router.get('/postos/:id', buscarPostoColetaPorId);
router.post('/postos', cadastrarPostoColeta);
router.put('/postos/:id', atualizarPostoColeta);
router.delete('/postos/:id', deletarPostoColeta);
router.get('/postos-proximos', buscarPostosProximos);

export default router;
