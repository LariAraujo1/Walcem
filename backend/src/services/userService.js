import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const createUser = async (userData) => {
  const { name, email, password } = userData;
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });
  
  return await newUser.save();
};

export const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

export const updateUser = async (id, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
