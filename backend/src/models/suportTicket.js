import mongoose from 'mongoose';

// Define o esquema do modelo de suporte
const supportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'open' },
    name: { type: String, required: true }, // Nome do solicitante
    email: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(v) {
                return /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/.test(v);
            },
            message: props => `${props.value} não é um e-mail válido!`
        }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

// Cria o modelo de suporte com base no esquema
const Support = mongoose.model('Support', supportSchema);

export default Support;

