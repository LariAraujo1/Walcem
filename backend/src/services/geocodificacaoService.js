import axios from 'axios';

// Importa a chave da API do arquivo .env
const apiKey = process.env.HERE_API_KEY; // variável definida no arquivo .env

// Função para obter coordenadas a partir do CEP usando a API de geocodificação do HERE
export const obterCoordenadas = async (cep) => {
  // Monta a URL para a API de geocodificação usando o CEP
  const url = `https://geocode.search.hereapi.com/v1/geocode?q=Invalidenstr+117+Berlin&apiKey=rz_gQy01iF7cAjSKRbHNYBC1navluPByiFTVxV5Bxmg`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.items.length > 0) {
      const { position } = data.items[0];
      const { lat, lng } = position;
      return [lng, lat]; // A ordem deve ser [longitude, latitude]
    } else {
      throw new Error('Nenhum resultado encontrado para o CEP fornecido');
    }
  } catch (error) {
    throw new Error(`Erro ao obter coordenadas: ${error.message}`);
  }
};

// Função para obter a rota entre dois pontos usando a API de Roteamento do HERE
export const obterRota = async (origem, destino) => {
  // Monta a URL para a API de roteamento usando as coordenadas de origem e destino
  const url = `https://router.hereapi.com/v8/routes?transportMode=car&origin=52.5308,13.3847&destination=52.5264,13.3686&return=summary&apikey=rz_gQy01iF7cAjSKRbHNYBC1navluPByiFTVxV5Bxmg`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.routes.length > 0) {
      return data.routes[0].sections[0].summary;
    } else {
      throw new Error('Nenhuma rota encontrada entre os pontos fornecidos');
    }
  } catch (error) {
    throw new Error(`Erro ao obter a rota: ${error.message}`);
  }
};
