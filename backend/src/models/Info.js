import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
  category: { 
    type: String, 
    enum: ['siteInfo', 'privacyPolicy', 'socialMedia', 'aboutUs', 'general'], // categorias adicionais
    required: true 
  },
  title: { 
    type: String, 
    required: true // título ou nome da seção de informação
  },
  content: { 
    type: String, 
    required: true // conteúdo da informação
  }
}, { timestamps: true });

const Info = mongoose.model('Info', infoSchema);

export default Info;
