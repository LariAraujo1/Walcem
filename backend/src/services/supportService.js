import Support from '../models/suportTicket.js';

// Serviço para listar todas as solicitações de suporte
const getAllRequests = async () => {
    return await Support.find();
};

// Serviço para obter uma solicitação de suporte por ID
const getRequestById = async (id) => {
    return await Support.findById(id);
};

// Serviço para criar uma nova solicitação de suporte
const createRequest = async (requestData) => {
    const newRequest = new Support(requestData);
    return await newRequest.save();
};

// Serviço para atualizar uma solicitação de suporte por ID
const updateRequest = async (id, requestData) => {
    return await Support.findByIdAndUpdate(id, requestData, { new: true });
};

// Serviço para excluir uma solicitação de suporte por ID
const deleteRequest = async (id) => {
    return await Support.findByIdAndDelete(id);
};

// Exporta as funções do serviço
export default {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
};
