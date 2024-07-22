// services/infoService.js
import Info from '../models/info.js';

export const createInfoService = async (data) => {
  const { category, title, content } = data;
  const newInfo = new Info({ category, title, content });
  return newInfo.save();
};

export const getAllInfoService = async () => {
  return Info.find();
};

export const getInfoByIdService = async (id) => {
  return Info.findById(id);
};

export const updateInfoByIdService = async (id, data) => {
  const { category, title, content } = data;
  return Info.findByIdAndUpdate(
    id,
    { category, title, content },
    { new: true }
  );
};

export const deleteInfoByIdService = async (id) => {
  return Info.findByIdAndDelete(id);
};
