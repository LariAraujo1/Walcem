import {
  createComment,
  getCommentsByPost,
  getCommentById,
  updateComment,
  deleteComment
} from '../services/commentService.js';

// Criar um novo comentário
export const createCommentController = async (req, res) => {
  try {
    const comment = await createComment(req.body);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter comentários por post
export const getCommentsByPostController = async (req, res) => {
  try {
    const comments = await getCommentsByPost(req.params.postId);
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter comentário por ID
export const getCommentByIdController = async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    if (!comment) {
      return res.status(404).send('Comentário não encontrado');
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Atualizar um comentário por ID
export const updateCommentController = async (req, res) => {
  try {
    const comment = await updateComment(req.params.id, req.body);
    if (!comment) {
      return res.status(404).send('Comentário não encontrado');
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deletar um comentário por ID
export const deleteCommentController = async (req, res) => {
  try {
    const comment = await deleteComment(req.params.id);
    if (!comment) {
      return res.status(404).send('Comentário não encontrado');
    }
    res.status(200).send('Comentário deletado');
  } catch (error) {
    res.status(400).send(error);
  }
};
