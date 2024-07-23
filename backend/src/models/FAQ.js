import mongoose from 'mongoose';

// Definição do esquema de FAQ
const FAQSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

// Cria o modelo de FAQ
const FAQ = mongoose.model('FAQ', FAQSchema);

export default FAQ;
