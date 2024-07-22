import * as postosColetaService from '../services/postosColetaService.js';
import { obterCoordenadas, obterRota } from '../services/geocodificacaoService.js'; 

// Método para listar todos os postos de coleta
export const listarPostosColeta = async (req, res) => {
  try {
    const postos = await postosColetaService.listarTodosPostos();
    res.json(postos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Método para buscar um posto de coleta por ID
export const buscarPostoColetaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const posto = await postosColetaService.buscarPostoPorId(id);
    if (!posto) {
      return res.status(404).json({ message: 'Posto de coleta não encontrado' });
    }
    res.json(posto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para cadastrar um novo posto de coleta
export const cadastrarPostoColeta = async (req, res) => {
  const dadosPosto = req.body;
  try {
    const novoPosto = await postosColetaService.cadastrarNovoPosto(dadosPosto);
    res.status(201).json(novoPosto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para atualizar informações de um posto de coleta
export const atualizarPostoColeta = async (req, res) => {
  const { id } = req.params;
  const novosDados = req.body;
  try {
    const resultado = await postosColetaService.atualizarPostoPorId(id, novosDados);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para deletar um posto de coleta
export const deletarPostoColeta = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await postosColetaService.deletarPostoPorId(id);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para buscar postos de coleta próximos
export const buscarPostosProximos = async (req, res) => {
  const { cep, distancia, porte, produto } = req.query;
  try {
    const postosProximos = await postosColetaService.buscarPostosProximos(cep, distancia, porte, produto);
    res.json(postosProximos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


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

// Método para obter a rota entre dois pontos usando a API de roteamento do HERE
export const obterRotaController = async (req, res) => {
  const { origem, destino } = req.query;
  try {
    const rota = await obterRota(origem, destino);
    res.json({ rota });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};