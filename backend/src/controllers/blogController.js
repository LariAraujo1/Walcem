import BlogService from '../services/blogService.js';

// Controller para listar todas as postagens do blog
export const getAllPosts = async (req, res) => {
    try {
        const posts = await BlogService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para obter uma postagem do blog por ID
export const getPostById = async (req, res) => {
    try {
        const post = await BlogService.getPostById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para criar uma nova postagem no blog
export const createPost = async (req, res) => {
    try {
        const newPost = await BlogService.createPost(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para atualizar uma postagem no blog por ID
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await BlogService.updatePost(req.params.id, req.body);
        if (!updatedPost) {
            return res.status(404).send('Post not found');
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para excluir uma postagem do blog por ID
export const deletePost = async (req, res) => {
    try {
        const deletedPost = await BlogService.deletePost(req.params.id);
        if (!deletedPost) {
            return res.status(404).send('Post not found');
        }
        res.json(deletedPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
