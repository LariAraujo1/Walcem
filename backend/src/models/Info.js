import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
  type: { type: String, required: true }, // tipo da informação, ex: 'siteInfo', 'privacyPolicy', 'socialMedia'
  content: { type: String, required: true } // conteúdo da informação
}, { timestamps: true });

const Info = mongoose.model('Info', infoSchema);

export default Info;
