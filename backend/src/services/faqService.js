import FAQ from '../models/FAQ.js';

// Listar todas as FAQs
export const getFAQs = async () => {
  return await FAQ.find();
};

// Obter uma FAQ específica
export const getFAQById = async (id) => {
  const faq = await FAQ.findById(id);
  if (!faq) {
    throw new Error('FAQ not found');
  }
  return faq;
};

// Criar uma nova FAQ
export const createFAQ = async (faqData) => {
  const faq = new FAQ(faqData);
  await faq.save();
  return faq;
};

// Atualizar uma FAQ existente
export const updateFAQ = async (id, faqData) => {
  const faq = await FAQ.findByIdAndUpdate(id, faqData, { new: true });
  if (!faq) {
    throw new Error('FAQ not found');
  }
  return faq;
};

// Excluir uma FAQ
export const deleteFAQ = async (id) => {
  const faq = await FAQ.findByIdAndDelete(id);
  if (!faq) {
    throw new Error('FAQ not found');
  }
  return faq;
};
