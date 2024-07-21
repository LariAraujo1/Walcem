import PostosColeta from '../models/postosColeta.js';

// Método para listar todos os postos de coleta
export const listarTodosPostos = async () => {
  try {
    // Utiliza o modelo PostosColeta para buscar todos os documentos na coleção
    return await PostosColeta.find();
  } catch (err) {
    // Lança um erro caso ocorra algum problema na busca
    throw new Error(`Erro ao buscar postos de coleta: ${err.message}`);
  }
};

// Método para buscar um posto de coleta por ID
export const buscarPostoPorId = async (id) => {
  try {
    // Utiliza o modelo PostosColeta para buscar um documento pelo ID fornecido
    return await PostosColeta.findById(id);
  } catch (err) {
    // Lança um erro caso ocorra algum problema na busca por ID
    throw new Error(`Erro ao buscar posto de coleta por ID: ${err.message}`);
  }
};

// Método para cadastrar um novo posto de coleta
export const cadastrarNovoPosto = async (dadosPosto) => {
  try {
    // Cria uma nova instância do modelo PostosColeta com os dados fornecidos
    const novoPosto = new PostosColeta(dadosPosto);
    // Salva o novo posto de coleta no banco de dados
    return await novoPosto.save();
  } catch (err) {
    // Lança um erro caso ocorra algum problema ao cadastrar o novo posto
    throw new Error(`Erro ao cadastrar novo posto de coleta: ${err.message}`);
  }
};

// Método para atualizar um posto de coleta por ID
export const atualizarPostoPorId = async (id, novosDados) => {
  try {
    // Utiliza o método findByIdAndUpdate do modelo PostosColeta para atualizar um documento pelo ID
    // O parâmetro { new: true } indica para retornar o documento atualizado após a operação
    return await PostosColeta.findByIdAndUpdate(id, novosDados, { new: true });
  } catch (err) {
    // Lança um erro caso ocorra algum problema ao atualizar o posto de coleta
    throw new Error(`Erro ao atualizar posto de coleta: ${err.message}`);
  }
};

// Método para deletar um posto de coleta por ID
export const deletarPostoPorId = async (id) => {
  try {
    // Utiliza o método findByIdAndDelete do modelo PostosColeta para deletar um documento pelo ID
    await PostosColeta.findByIdAndDelete(id);
  } catch (err) {
    // Lança um erro caso ocorra algum problema ao deletar o posto de coleta
    throw new Error(`Erro ao deletar posto de coleta: ${err.message}`);
  }
};
