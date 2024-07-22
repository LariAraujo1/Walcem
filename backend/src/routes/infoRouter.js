// routes/infoRoutes.js
import express from 'express';
import {
  createInfo,
  getAllInfo,
  getInfoById,
  updateInfoById,
  deleteInfoById
} from '../controllers/infoController.js';

const router = express.Router();

router.post('/info', createInfo);
router.get('/info', getAllInfo);
router.get('/info/:id', getInfoById);
router.put('/info/:id', updateInfoById);
router.delete('/info/:id', deleteInfoById);

export default router;
