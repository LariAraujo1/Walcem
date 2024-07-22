import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: String,
  content: String,
  imageUrl: String,
  category: String,
  comments: [{
    user: String,
    comment: String,
    date: Date
  }]
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

export default model('Post', postSchema);
