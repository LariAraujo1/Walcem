import mongoose from 'mongoose';

// Define o esquema do modelo de suporte
const supportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'open' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

// Cria o modelo de suporte com base no esquema
const Support = mongoose.model('Support', supportSchema);

export default Support;
