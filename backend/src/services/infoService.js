//  exemplo básico de como a camada de serviço pode ser estruturada.

import Info from '../models/Info.js';

export const getInfos = async () => {
  return await Info.find();
};

export const getInfo = async (id) => {
  return await Info.findById(id);
};

export const createNewInfo = async (data) => {
  const newInfo = new Info(data);
  return await newInfo.save();
};

export const updateExistingInfo = async (id, data) => {
  return await Info.findByIdAndUpdate(id, data, { new: true });
};

export const deleteInfoById = async (id) => {
  return await Info.findByIdAndDelete(id);
};
