import * as postosColetaService from '../services/postosColetaService.js';

// Método para listar todos os postos de coleta
export const listarPostosColeta = async (req, res) => {
  try {
    // Chama o serviço para listar todos os postos de coleta
    const postos = await postosColetaService.listarTodosPostos();
    res.json(postos); // Retorna os postos de coleta em formato JSON
  } catch (err) {
    // Captura e retorna um erro caso ocorra algum problema
    res.status(500).json({ message: err.message });
  }
};

// Método para cadastrar um novo posto de coleta
export const cadastrarPostoColeta = async (req, res) => {
  const dadosPosto = req.body; // Obtém os dados do novo posto de coleta do corpo da requisição
  try {
    // Chama o serviço para cadastrar um novo posto de coleta com os dados recebidos
    const novoPosto = await postosColetaService.cadastrarNovoPosto(dadosPosto);
    res.status(201).json(novoPosto); // Retorna o novo posto de coleta criado com status HTTP 201 (Created)
  } catch (err) {
    // Captura e retorna um erro caso ocorra algum problema na validação ou no cadastro
    res.status(400).json({ message: err.message });
  }
};

// Método para atualizar informações de um posto de coleta
export const atualizarPostoColeta = async (req, res) => {
  const { id } = req.params; // Obtém o ID do posto de coleta a ser atualizado dos parâmetros da requisição
  const novosDados = req.body; // Obtém os novos dados do posto de coleta a serem atualizados do corpo da requisição
  try {
    // Chama o serviço para atualizar as informações do posto de coleta com o ID especificado
    const postoAtualizado = await postosColetaService.atualizarPostoPorId(id, novosDados);
    res.json(postoAtualizado); // Retorna o posto de coleta atualizado em formato JSON
  } catch (err) {
    // Captura e retorna um erro caso ocorra algum problema na validação ou na atualização
    res.status(400).json({ message: err.message });
  }
};

// Método para deletar um posto de coleta
export const deletarPostoColeta = async (req, res) => {
  const { id } = req.params; // Obtém o ID do posto de coleta a ser deletado dos parâmetros da requisição
  try {
    // Chama o serviço para deletar o posto de coleta com o ID especificado
    await postosColetaService.deletarPostoPorId(id);
    res.json({ message: 'Posto de coleta deletado com sucesso' }); // Retorna uma mensagem de sucesso em caso de deleção bem-sucedida
  } catch (err) {
    // Captura e retorna um erro caso ocorra algum problema na validação ou na deleção
    res.status(400).json({ message: err.message });
  }
};
