// Configuração do Middleware de Autenticação

import { verify } from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // Obter o token do cabeçalho 'Authorization'
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Verificar se o token existe
    if (!token) {
        return res.status(401).json({ msg: 'Nenhum token fornecido, autorização negada' });
    }

    try {
        // Verificar e decodificar o token
        const decoded = verify(token, process.env.JWT_SECRET);

        // Adicionar o usuário decodificado ao objeto req para uso posterior
        req.user = decoded.user;

        // Chamar o próximo middleware
        next();
    } catch (err) {
        // Se houver erro na verificação do token
        console.error(err.message);
        return res.status(401).json({ msg: 'Token inválido' });
    }
};

export default authMiddleware;

