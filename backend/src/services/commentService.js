import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Criar um novo comentário
export const createComment = async (data) => {
  const comment = new Comment(data);
  await comment.save();
  
  // Adiciona o comentário ao blog correspondente
  await Blog.findByIdAndUpdate(data.postId, { $push: { comments: comment._id } });
  
  return comment;
};

// Obter comentários por ID do post
export const getCommentsByPost = async (postId) => {
  const blog = await Blog.findById(postId).populate('comments');
  return blog.comments;
};

// Obter comentário por ID
export const getCommentById = async (id) => {
  return await Comment.findById(id);
};

// Atualizar um comentário por ID
export const updateComment = async (id, data) => {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
};

// Deletar um comentário por ID
export const deleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};
