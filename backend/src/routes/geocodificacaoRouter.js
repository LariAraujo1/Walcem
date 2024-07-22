import express from 'express';
import {
  obterCoordenadasController,
  obterRotaController
} from '../controllers/postosColetaController.js'; // Atualize o caminho conforme necessário

const router = express.Router();

router.get('/obter-coordenadas', obterCoordenadasController);
router.get('/obter-rota', obterRotaController);

export default router;
