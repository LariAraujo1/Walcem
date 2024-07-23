import Blog from '../models/blogPost.js';

// Serviço para listar todas as postagens do blog
const getAllPosts = async () => {
    return await Blog.find();
};

// Serviço para obter uma postagem do blog por ID
const getPostById = async (id) => {
    return await Blog.findById(id);
};

// Serviço para criar uma nova postagem no blog
const createPost = async (postData) => {
    const newPost = new Blog(postData);
    return await newPost.save();
};

// Serviço para atualizar uma postagem no blog por ID
const updatePost = async (id, postData) => {
    return await Blog.findByIdAndUpdate(id, postData, { new: true });
};

// Serviço para excluir uma postagem do blog por ID
const deletePost = async (id) => {
    return await Blog.findByIdAndDelete(id);
};

// Exporta as funções do serviço
export default {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
