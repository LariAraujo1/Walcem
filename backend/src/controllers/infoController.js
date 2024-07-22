import { 
  createInfoService, 
  getAllInfoService, 
  getInfoByIdService, 
  updateInfoByIdService, 
  deleteInfoByIdService 
} from '../services/infoService.js';

// Controller para criar nova informação
export const createInfo = async (req, res) => {
  try {
    const newInfo = await createInfoService(req.body);
    res.status(201).json(newInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller para obter todas as informações
export const getAllInfo = async (req, res) => {
  try {
    const info = await getAllInfoService();
    res.json(info);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller para obter informação por ID
export const getInfoById = async (req, res) => {
  try {
    const info = await getInfoByIdService(req.params.id);
    if (!info) {
      return res.status(404).send('Info not found');
    }
    res.json(info);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller para atualizar informação por ID
export const updateInfoById = async (req, res) => {
  try {
    const updatedInfo = await updateInfoByIdService(req.params.id, req.body);
    if (!updatedInfo) {
      return res.status(404).send('Info not found');
    }
    res.json(updatedInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller para excluir informação por ID
export const deleteInfoById = async (req, res) => {
  try {
    const deletedInfo = await deleteInfoByIdService(req.params.id);
    if (!deletedInfo) {
      return res.status(404).send('Info not found');
    }
    res.json(deletedInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
