import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  category: { type: String, required: true },
  comments: [{
    user: String,
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }]
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
