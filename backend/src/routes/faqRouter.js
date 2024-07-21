import express from 'express';
import {
  getFAQs,
  getFAQById,
  createFAQ,
  updateFAQ,
  deleteFAQ,
} from '../controllers/faqController.js';

const router = express.Router();

// Rota para listar todas as FAQs
router.get('/', getFAQs);

// Rota para obter uma FAQ específica
router.get('/:id', getFAQById);

// Rota para criar uma nova FAQ
router.post('/', createFAQ);

// Rota para atualizar uma FAQ existente
router.put('/:id', updateFAQ);

// Rota para excluir uma FAQ
router.delete('/:id', deleteFAQ);

export default router;
