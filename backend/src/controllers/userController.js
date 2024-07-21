// Importando o serviço de usuário
const userService = require('../services/userService');

// Obter perfil do usuário
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await userService.getProfile(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar perfil do usuário
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const updatedData = req.body;
    const updatedUser = await userService.updateProfile(userId, updatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
