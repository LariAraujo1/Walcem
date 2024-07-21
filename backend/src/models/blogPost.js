import mongoose from 'mongoose';

// Define o esquema do modelo de blog
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

// Cria o modelo de blog com base no esquema
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
