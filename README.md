# App VagaCerta

Este projeto é uma App mobile conectado a uma API criada com Node.js, Express e Sequelize que implementa operações Create, Read e Update para a entidade "Usuários". O projeto foi criado como o último trabalho da trilha de desenvolvimento mobile promovida pela RESTIC36. Os requisitos para a elaboração dessa aplicação foram:  
- R1. Conectar com a API de vagas feita com base no conteúdo que o professor Jeferson passou. 
- R2. Permitir o acesso somente após realizar o login.
- R3. Criar um contexto para o usuário autenticado.
- R4. Manter localmente os dados do usuário autenticado.
- R5. Exibir botão de contato apenas quando a vaga estiver aberta e o botão deve redirecionar para o whatsapp;
- R6. Desenvolver a edição de usuário.
- R7. Implementar função de logout.

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- SQLite: banco de dados.
- Body-parser
- UUID para geração de IDs únicos
- Async Storage
- Expo: framework para desenvolvimento de aplicações móveis.
- TypeScript: linguagem de programação para desenvolvimento de aplicações.
- React Native: framework para desenvolvimento de aplicações móveis.
- React Navigation: biblioteca para navegação entre telas.

## Estrutura do Projeto

Nessa aplicação temos dois projetos: O backend (API) e o mobile (frontend).

### backend:
- `server.js` - Arquivo principal da aplicação que inicia o servidor.
- `config/database.js` - Configuração do Sequelize e do banco de dados SQLite.
- `routes/usuarios.js` - Rotas para o CRUD de Usuários.
- `routes/vagas.js` - Rotas para o CRUD de Vagas.


### mobile `src`:

* `components`: pasta contendo os componentes da aplicação, sendo estes separados por pastas contendo os arquivos styles.ts e index.tsx.

* `contexts/AuthContext`: contém o contexto responsável por gerenciar as operações de Create, Read e Update em usuários e Logout do usuário na aplicação, além de lidar com o armazenamento local usando o AsyncStorage para salvar o usúario autenticado (Usamos esses dados salvos localmente para acessar o app sem precisar fazer o login novamente) (R2, R3 e R4).

* `Screens`: pasta contendo as telas da aplicação:
    * `Details` - Tela para visualização dos detalhes das vagas e que redireciona para o Whatsapp caso a vaga esteja aberta (R5).
    * `Form` - Tela que permite a criação de um novo usuário.
    * `List` - Tela inicial que mostra as vagas cadastradas.
    * `Login` - Tela de login para o usuário acessar a aplicação (R2).
    * `Profile` - Tela destinada ao usuário onde ele pode editar suas informações ou fazer Logout (R6 e R7).

* `services/api.ts`: Conexão com a API usando o axios (R1).
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

- 2.1 Mobile (Abra a pasta Mobile):
  
   ```bash
   yarn install 
   ```

- 2.2 Backend (Abra a pasta backend):

   ```bash
   npm install
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

 Copie o numero que está em IPv4 Address. 
 Cole no código onde tem "XXX..." de `mobile/scr/services/api.ts`:
```bash

import axios from 'axios'

    const api = axios.create({
    baseURL: 'http://XXX.XXX.X.XXX:3000' 
    })

export default api;
```
Abra a pasta backend no terminal e execute:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.

Agora vamos rodar o mobile:

- Abra a pasta mobile no terminal eexecute:

```bash
yarn start
```

A partir daí você poderá simular o app. Recomendamos o uso do aplicativo Expo Go, para usa-lo basta acessar o aplicativo e escanear o QRCode e testar as funcionalidades, certifique-se de instalar a versão do aplicativo com a SDk 51, caso o seu aplicativo esteja com uma versão posterior será mostrado uma mensagem com um link para baixar o app com o SDK 51, baixe-o, desistale o app atual e instale o app que você baixou.


## Contribuição:

Para contribuir com o projeto, basta fazer um fork do repositório e enviar um pull request com suas alterações organizadas e explicadas através dos commits.

## Licença:

Este projeto é licenciado sob a licença MIT. Você pode encontrar mais informações sobre a licença no arquivo LICENSE. 
* [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)




