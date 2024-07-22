import { obterCoordenadas, obterRota } from '../services/geocodificacaoService.js';

// Método para obter coordenadas usando a API de geocodificação do HERE
export const obterCoordenadasController = async (req, res) => {
  const { cep } = req.query;
  try {
    const coordenadas = await obterCoordenadas(cep);
    res.json({ coordenadas });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para obter a rota entre dois CEPs
export const getRota = async (req, res) => {
  try {
      const { origem, destino } = req.query;
      
      // Obter coordenadas de origem e destino
      const coordenadasOrigem = await obterCoordenadas(origem);
      const coordenadasDestino = await obterCoordenadas(destino);
      
      // Formatar coordenadas para a API de roteamento
      const rota = await obterRota(
          `${coordenadasOrigem.latitude},${coordenadasOrigem.longitude}`,
          `${coordenadasDestino.latitude},${coordenadasDestino.longitude}`
      );
      
      res.json(rota);
  } catch (error) {
      res.status(500).send(error.message);
  }
};