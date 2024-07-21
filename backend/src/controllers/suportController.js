import SupportService from '../services/supportService.js';

// Controller para listar todas as solicitações de suporte
export const getAllRequests = async (req, res) => {
    try {
        const requests = await SupportService.getAllRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para obter uma solicitação de suporte por ID
export const getRequestById = async (req, res) => {
    try {
        const request = await SupportService.getRequestById(req.params.id);
        if (!request) {
            return res.status(404).send('Request not found');
        }
        res.json(request);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para criar uma nova solicitação de suporte
export const createRequest = async (req, res) => {
    try {
        const newRequest = await SupportService.createRequest(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para atualizar uma solicitação de suporte por ID
export const updateRequest = async (req, res) => {
    try {
        const updatedRequest = await SupportService.updateRequest(req.params.id, req.body);
        if (!updatedRequest) {
            return res.status(404).send('Request not found');
        }
        res.json(updatedRequest);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller para excluir uma solicitação de suporte por ID
export const deleteRequest = async (req, res) => {
    try {
        const deletedRequest = await SupportService.deleteRequest(req.params.id);
        if (!deletedRequest) {
            return res.status(404).send('Request not found');
        }
        res.json(deletedRequest);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
