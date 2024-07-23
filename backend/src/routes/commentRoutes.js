import express from 'express';
import {
  createCommentController,
  getCommentsByPostController,
  getCommentByIdController,
  updateCommentController,
  deleteCommentController
} from '../controllers/commentController.js';

const router = express.Router();

// Rotas para Comentários
router.post('/comments', createCommentController);
router.get('/posts/:postId/comments', getCommentsByPostController);
router.get('/comments/:id', getCommentByIdController);
router.put('/comments/:id', updateCommentController);
router.delete('/comments/:id', deleteCommentController);

export default router;
