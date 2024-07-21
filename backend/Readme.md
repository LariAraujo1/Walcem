# Backend do Site de Reciclagem

Este repositório contém o backend para um site de reciclagem de eletrônicos. O backend é construído com Node.js, Express e MongoDB. Ele fornece APIs para gerenciar postos de coleta, postagens de blog, suporte, informações do site, FAQ, login e cadastro de usuários, etc.

## Estrutura do Projeto

backend/
│
├── src/
│ ├── controllers/
│ │ ├── postosColetaController.js
│ │ ├── blogController.js
│ │ ├── supportController.js
│ │ ├── infoController.js
│ │ └── ...
│ ├── models/
│ │ ├── PostoColeta.js
│ │ ├── Blog.js
│ │ ├── Support.js
│ │ ├── Info.js
│ │ └── ...
│ ├── routes/
│ │ ├── postosColetaRoutes.js
│ │ ├── blogRouter.js
│ │ ├── supportRouter.js
│ │ ├── infoRouter.js
│ │ └── ...
│ ├── services/
│ │ ├── postosColetaService.js
│ │ ├── blogService.js
│ │ ├── supportService.js
│ │ ├── infoService.js
│ │ └── ...
│ ├── middlewares/
│ │ └── (middlewares.js)
│ └── ...
│
├── app.js
└── server.js


## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou um cluster do MongoDB Atlas)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/usuario/repo.git

2. Navegue até o diretório do projeto:

cd backend

3. Instale as dependências:

npm install

4. Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias. Exemplo:

MONGO_URI=mongodb://localhost:27017/nome-do-banco
PORT=5000

# Estrutura do Backend

app.js
Configura o Express, middlewares e rotas.

Middlewares: Configura cors, bodyParser, e express.json().
Rotas:
/api/postos-coleta: Roteador para postos de coleta
/api/blog: Roteador para postagens de blog
/api/support: Roteador para suporte
/api/info: Roteador para informações sobre o site
server.js
Este arquivo é responsável por conectar ao MongoDB e iniciar o servidor Express.

Conexão com o MongoDB: Usa mongoose para conectar ao banco de dados.
Inicialização do Servidor: Inicia o servidor Express na porta definida.

# Rodando o Servidor

Para iniciar o servidor, execute:

node server.js

O servidor estará rodando na porta especificada na variável de ambiente PORT (ou na porta 5000 por padrão).

Rotas da API
Postos de Coleta
GET /api/postos-coleta - Lista todos os postos de coleta
GET /api/postos-coleta/:id - Visualiza um posto de coleta específico
POST /api/postos-coleta - Cria um novo posto de coleta
PUT /api/postos-coleta/:id - Atualiza um posto de coleta existente
DELETE /api/postos-coleta/:id - Exclui um posto de coleta
Blog
GET /api/blog - Lista todas as postagens do blog
GET /api/blog/:id - Visualiza uma postagem do blog específica
POST /api/blog - Cria uma nova postagem do blog
PUT /api/blog/:id - Atualiza uma postagem do blog existente
DELETE /api/blog/:id - Exclui uma postagem do blog
Suporte
GET /api/support - Lista todas as solicitações de suporte
GET /api/support/:id - Visualiza uma solicitação de suporte específica
POST /api/support - Envia uma nova solicitação de suporte
PUT /api/support/:id - Atualiza uma solicitação de suporte existente
DELETE /api/support/:id - Exclui uma solicitação de suporte
Informações sobre o Site
GET /api/info - Lista todas as informações
GET /api/info/:id - Visualiza uma informação específica
POST /api/info - Cria uma nova informação
PUT /api/info/:id - Atualiza uma informação existente
DELETE /api/info/:id - Exclui uma informação
Contribuindo
Sinta-se à vontade para abrir issues ou pull requests para contribuir com melhorias ou correções.

Licença
Este projeto está licenciado sob a MIT License.