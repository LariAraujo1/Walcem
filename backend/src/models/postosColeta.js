import mongoose from 'mongoose';

// Definição do schema para o modelo de dados de postos de coleta
const postosColetaSchema = new mongoose.Schema({
  nomeEmpresa: { type: String, required: true },  // Nome da empresa do posto de coleta
  endereco: { type: String, required: true },  // Endereço do posto de coleta
  tipoEletronicoAceito: { type: [String], required: true },  // Tipos de eletrônicos aceitos pelo posto de coleta
  localizacao: {  // Localização geoespacial do posto de coleta
    type: { type: String, enum: ['Point'], default: 'Point' },  // Tipo Point para coordenadas geoespaciais
    coordinates: { type: [Number], required: true }  // Coordenadas [longitude, latitude] do posto de coleta
  },
  raioAtendimentoKm: { type: Number, required: true },  // Raio de atendimento do posto de coleta em quilômetros
  horarioFuncionamento: { type: String, required: true }  // Horário de funcionamento do posto de coleta
});

// Adiciona um índice espacial 2dsphere no campo 'localizacao'
// Isso permite consultas eficientes baseadas em geolocalização no MongoDB
postosColetaSchema.index({ localizacao: '2dsphere' });

// Cria o modelo 'postosColeta' usando o schema definido anteriormente
// Este modelo facilita a manipulação de dados de postos de coleta de eletrônicos no MongoDB
const postosColeta = mongoose.model('postosColeta', postosColetaSchema);

export default postosColeta;
