import PostosColeta from '../models/postosColeta.js';

// Método para listar todos os postos de coleta
export const listarTodosPostos = async () => {
  try {
    return await PostosColeta.find();
  } catch (err) {
    throw new Error(`Erro ao buscar postos de coleta: ${err.message}`);
  }
};

// Método para buscar um posto de coleta por ID
export const buscarPostoPorId = async (id) => {
  try {
    return await PostosColeta.findById(id);
  } catch (err) {
    throw new Error(`Erro ao buscar posto de coleta por ID: ${err.message}`);
  }
};

// Método para cadastrar um novo posto de coleta
export const cadastrarNovoPosto = async (dadosPosto) => {
  try {
    const novoPosto = new PostosColeta(dadosPosto);
    return await novoPosto.save();
  } catch (err) {
    throw new Error(`Erro ao cadastrar novo posto de coleta: 👀 ${err.message}`);
  }
};

// Método para atualizar um posto de coleta por ID
export const atualizarPostoPorId = async (id, novosDados) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Formato de ID inválido 🤦‍♀️');
    }

    const postoAtualizado = await PostosColeta.findByIdAndUpdate(id, novosDados, { new: true });

    if (!postoAtualizado) {
      throw new Error('Posto de coleta não encontrado 😢');
    }

    return { message: 'Posto de coleta atualizado com sucesso 🤞', data: postoAtualizado };
  } catch (err) {
    throw new Error(`Erro ao atualizar posto de coleta: 👀 ${err.message}`);
  }
};

// Método para deletar um posto de coleta por ID
export const deletarPostoPorId = async (id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Formato de ID inválido');
    }

    const result = await PostosColeta.findByIdAndDelete(id);

    if (!result) {
      throw new Error('Posto de coleta não encontrado');
    }

    return { message: 'Posto de coleta deletado com sucesso' };
  } catch (err) {
    throw new Error(`Erro ao deletar posto de coleta: ${err.message}`);
  }
};

// Método para encontrar postos de coleta próximos
export const buscarPostosProximos = async (cep, distancia, porte, produto) => {
  try {
    const [longitude, latitude] = await obterCoordenadas(cep);
    const distanciaMetros = distancia * 1000;

    return await PostosColeta.find({
      localizacao: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: distanciaMetros
        }
      },
      porte: porte,
      tiposReciclaveis: produto
    });
  } catch (err) {
    throw new Error(`Erro ao buscar postos de coleta próximos: ${err.message}`);
  }
};
