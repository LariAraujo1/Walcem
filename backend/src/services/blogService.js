import Post from '../models/blog.js';

const getAllPosts = async () => {
    return await Post.find();
  };
  
  const getPostById = async (id) => {
    return await Post.findById(id);
  };
  
  const createPost = async (postData) => {
    const post = new Post(postData);
    return await post.save();
  };
  
  const updatePost = async (id, postData) => {
    return await Post.findByIdAndUpdate(id, postData, { new: true });
  };
  
  const deletePost = async (id) => {
    return await Post.findByIdAndDelete(id);
  };
  
  export default {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };