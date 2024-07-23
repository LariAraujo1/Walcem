import { Router } from 'express';
import * as supportController from '../controllers/suportController.js';

// Cria um novo roteador
const router = Router();

// Define as rotas de suporte e mapeia para os controllers correspondentes
router.get('/requests', supportController.getAllRequests);
router.get('/requests/:id', supportController.getRequestById);
router.post('/requests', supportController.createRequest);
router.put('/requests/:id', supportController.updateRequest);
router.delete('/requests/:id', supportController.deleteRequest);

export default router;
