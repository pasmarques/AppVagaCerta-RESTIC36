# App VagaCerta

Este projeto é uma App mobile conectado a uma API criada com Node.js, Express e Sequelize que implementa operações Create, Read e Update para a entidade "Usuários". O banco de dados utilizado é o SQLite.

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- SQLite
- Body-parser
- UUID para geração de IDs únicos

## Estrutura do Projeto

Nessa aplicação temos dois projetos: O backend (API) e o mobile (frontend).

### backend:
- `server.js` - Arquivo principal da aplicação que inicia o servidor.
- `config/database.js` - Configuração do Sequelize e do banco de dados SQLite.
- `routes/usuarios.js` - Rotas para o CRUD de Usuários.
- `routes/vagas.js` - Rotas para o CRUD de Vagas.


### mobile `src`:

* `components`: pasta contendo os componentes da aplicação, sendo estes separados por pastas contendo os arquivos styles.ts e index.tsx.

* `contexts`: contém o contexto responsável por gerenciar as operações de Create, Read e Update em usuários e Logout do usuário na aplicação, além de lidar com o armazenamento local usando o AsyncStorage.

* `Screens`: pasta contendo as telas da aplicação:
    * `Details` - Tela para visualização dos detalhes das vagas e que redireciona para o Whatsapp caso a vaga esteja aberta.
    * `Form` - Tela que permite a criação de um novo usuário.
    * `List` - Tela inicial que mostra as vagas cadastradas.
    * `Login` - Tela de login para o usuário acessar a aplicação.
    * `Profile` - Tela destinada ao usuário onde ele pode editar suas informações ou fazer Logout.

* `services/api.ts`: Conexão com a API.
```bash

import axios from 'axios'

    const api = axios.create({
    baseURL: 'http://192.168.0.106:3000' 
    })

export default api;
```
* `Utils`: pasta contendo a estrutura dos dados.

### mobile `assets`:

Pasta contendo os ativos da aplicação (ícones, imagens, etc.)

### App.tsx:

Arquivo que gerencia a lógica de inicialização do app e renderiza a interface da aplicação.

### Endpoints da API

#### Usuários

- **GET /api/usuarios** - Lista todos os usuários.
- **POST /api/usuarios** - Cria um novo usuário.
- **GET /api/usuarios/:id** - Retorna um usuário específico.
- **PUT /api/usuarios/:id** - Atualiza as informações de um usuário.
- **DELETE /api/usuarios/:id** - Deleta um usuário.

#### Vagas

- **GET /api/vagas** - Lista todas as vagas.
- **POST /api/vagas** - Cria uma nova vaga.
- **GET /api/vagas/:id** - Retorna uma vaga específica.
- **PUT /api/vagas/:id** - Atualiza as informações de uma vaga.
- **DELETE /api/vagas/:id** - Deleta uma vaga.

## Sincronização com o Banco de Dados

A sincronização do banco de dados com o Sequelize é feita automaticamente ao iniciar a aplicação:
```javascript
sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Unable to synchronize the database:', err);
});
```

## Configurações do Projeto

Para alterar a porta da aplicação, ajuste a variável `PORT` no ambiente ou modifique diretamente o código:
```javascript
const PORT = process.env.PORT || 3000;
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pasmarques/AppVagaCerta-RESTIC36.git
   ```

2. Instale as dependências:

- 2.1 Mobile:

   ```bash
   npm install
   ```
   ```bash
   npm install axios
   ```
   ```bash
   yarn install 
   ```

- 2.2 Backend:

   ```bash
   npm install
   ```

   ```bash
   npm install express
   ```

### Executar o Servidor

### PARA VERIRIFICAR IP:

- ipconfig

exemplo:

Adaptador Ethernet Ethernet:

   - Sufixo DNS específico de conexão. . . . . . : uesc.net
   - Endereço IPv6 de link local . . . . . . . . : fe80::49e5:1c32:b9f0:b23d%18
   - Endereço IPv4. . . . . . . .  . . . . . . . : 192.168.72.3
   - Máscara de Sub-rede . . . . . . . . . . . . : 255.255.254.0
   - Gateway Padrão. . . . . . . . . . . . . . . : 192.168.73.1

Adaptador de Rede sem Fio Wi-Fi:

   - Sufixo DNS específico de conexão. . . . . . :
   - Endereço IPv6 de link local . . . . . . . . : fe80::1b27:871a:2336:38eb%8
   - Endereço IPv4. . . . . . . .  . . . . . . . : 172.26.11.205
   - Máscara de Sub-rede . . . . . . . . . . . . : 255.255.192.0
   - Gateway Padrão. . . . . . . . . . . . . . . : 172.26.0.1

- Copie o numero que está em IPv4 Address. 
- Cole no código onde tem "XXX...":

* `mobile/scr/services/api.ts`:
```bash

    import axios from 'axios'

    const api = axios.create({
    baseURL: 'http://XXX.XXX.X.XXX:3000' 
    })

export default api;
```
Abra a pasta backed no terminal e execute:

```bash
npm start
```
ou

```bash
yarn start
```

O servidor estará rodando em `http://localhost:3000`.

Agora vamos rodar o mobile:

- Navegue até a pasta mobile e em outro terminal, execute:

```bash
yarn start
```

A partir daí você poderá simular o app. Caso queira usar o Expo Go, basta acessar o aplicativo e escanear o QRCode e testar ass funcionalidades.


## Contribuição:

Para contribuir com o projeto, basta fazer um fork do repositório e enviar um pull request com suas alterações organizadas e explicadas através dos commits.

## Licença:

Este projeto é licenciado sob a licença MIT. Você pode encontrar mais informações sobre a licença no arquivo LICENSE. 
* [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)



