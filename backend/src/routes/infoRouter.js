import express from 'express';
import {
  getAllInfos,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo
} from '../controllers/infoController.js';

const router = express.Router();

router.get('/', getAllInfos);
router.get('/:id', getInfoById);
router.post('/', createInfo);
router.put('/:id', updateInfo);
router.delete('/:id', deleteInfo);

export default router;
