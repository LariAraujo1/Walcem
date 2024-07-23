// Importando o serviço de FAQ
const faqService = require('../services/faqService');

// Listar FAQs
exports.listFAQs = async (req, res) => {
  try {
    const faqs = await faqService.listFAQs();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter uma FAQ específica
exports.getFAQ = async (req, res) => {
  try {
    const faqId = req.params.id;
    const faq = await faqService.getFAQ(faqId);
    res.status(200).json(faq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Criar uma nova FAQ
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFAQ = await faqService.createFAQ(question, answer);
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar uma FAQ
exports.updateFAQ = async (req, res) => {
  try {
    const faqId = req.params.id;
    const updatedData = req.body;
    const updatedFAQ = await faqService.updateFAQ(faqId, updatedData);
    res.status(200).json(updatedFAQ);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Excluir uma FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    const faqId = req.params.id;
    await faqService.deleteFAQ(faqId);
    res.status(200).json({ message: 'FAQ excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
