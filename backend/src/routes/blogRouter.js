import { Router } from 'express';
import * as blogController from '../controllers/blogController.js';

// Cria um novo roteador
const router = Router();

// Define as rotas do blog e mapeia para os controllers correspondentes
router.get('/posts', blogController.getAllPosts);
router.get('/posts/:id', blogController.getPostById);
router.post('/posts', blogController.createPost);
router.put('/posts/:id', blogController.updatePost);
router.delete('/posts/:id', blogController.deletePost);

export default router;
