import mongoose from 'mongoose';

// Definição do schema
const postosColetaSchema = new mongoose.Schema({
  razaoSocial: { type: String, required: true },
  cnpj: { type: String, required: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  senha: { type: String, required: true },
  tiposReciclaveis: { type: [String], required: true },
  porte: { type: String, required: true }, // Pequeno, Médio, Grande
  localizacao: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
});

// Criação do índice espacial
postosColetaSchema.index({ localizacao: '2dsphere' });

// Criação do modelo
const PostosColeta = mongoose.model('PostosColeta', postosColetaSchema);

export default PostosColeta;

