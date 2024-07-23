import express from 'express';
import {
    createPost,
    updatePost,
    deletePost,
    getAllPosts,
    getPostById
} from '../controllers/blogController.js';

const router = express.Router();

// Rotas para Administração de Notícias
router.post('/posts', createPost); 
router.put('/posts/:id', updatePost); 
router.delete('/posts/:id', deletePost); 
router.get('/posts', getAllPosts); 
router.get('/posts/:id', getPostById); 

export default router;
