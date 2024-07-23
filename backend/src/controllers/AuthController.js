// Importando o serviço de autenticação
const authService = require('../services/authService');

// Registrar um novo usuário
exports.register = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    const result = await authService.register(name, email, password, userType);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login do usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Logout do usuário
exports.logout = (req, res) => {
  try {
    authService.logout(req.token);
    res.status(200).json({ message: 'Logout bem-sucedido' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verificar token
exports.verifyToken = (req, res) => {
  try {
    const isValid = authService.verifyToken(req.headers.authorization);
    res.status(200).json({ valid: isValid });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Recuperar senha
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.forgotPassword(email);
    res.status(200).json({ message: 'Instruções de recuperação de senha enviadas' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Resetar senha
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await authService.resetPassword(token, newPassword);
    res.status(200).json({ message: 'Senha resetada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
