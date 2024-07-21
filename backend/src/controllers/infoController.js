import Info from '../models/Info.js';

// Função para listar todas as informações
export const getAllInfos = async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para visualizar uma informação específica
export const getInfoById = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) return res.status(404).json({ message: 'Informação não encontrada' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para criar uma nova informação
export const createInfo = async (req, res) => {
  const { type, content } = req.body;
  const newInfo = new Info({ type, content });

  try {
    const savedInfo = await newInfo.save();
    res.status(201).json(savedInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para atualizar uma informação existente
export const updateInfo = async (req, res) => {
  const { type, content } = req.body;

  try {
    const updatedInfo = await Info.findByIdAndUpdate(req.params.id, { type, content }, { new: true });
    if (!updatedInfo) return res.status(404).json({ message: 'Informação não encontrada' });
    res.json(updatedInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para excluir uma informação
export const deleteInfo = async (req, res) => {
  try {
    const deletedInfo = await Info.findByIdAndDelete(req.params.id);
    if (!deletedInfo) return res.status(404).json({ message: 'Informação não encontrada' });
    res.json({ message: 'Informação excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
