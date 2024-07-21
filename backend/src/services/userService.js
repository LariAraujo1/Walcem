import User from '../models/User.js';

// Atualizar informações do usuário
export const updateUser = async (userId, userData) => {
  const user = await User.findByIdAndUpdate(userId, userData, { new: true });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};
