import { Router } from 'express';
import * as supportController from '../controllers/suportController.js';

// Cria um novo roteador
const router = Router();

// Define as rotas de suporte e mapeia para os controllers correspondentes
router.get('/suporte', supportController.getAllRequests);
router.get('/suporte/:id', supportController.getRequestById);
router.post('/suporte', supportController.createRequest);
router.put('/suporte/:id', supportController.updateRequest);
router.delete('/suporte/:id', supportController.deleteRequest);

export default router;
