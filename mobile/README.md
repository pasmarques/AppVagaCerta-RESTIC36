# App VagaCerta

Este projeto é uma App mobile criado com base no modelo do professor Ciro Daniel.

## Tecnologias Utilizadas
- Node.js
- Expo: framework para desenvolvimento de aplicações móveis.
- TypeScript: linguagem de programação para desenvolvimento de aplicações.
- React Native: framework para desenvolvimento de aplicações móveis.
- React Navigation: biblioteca para navegação entre telas.

## Estrutura do Projeto

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


## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/ciromoura/restic36-app-vagacerta.git
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

A partir daí você poderá simular o app. Caso queira usar o Expo Go, basta acessar o aplicativo e escanear o QRCode e testar ass funcionalidades.


## Contribuição:

Para contribuir com o projeto, basta fazer um fork do repositório e enviar um pull request com suas alterações organizadas e explicadas através dos commits.

## Licença:

Este projeto é licenciado sob a licença MIT. Você pode encontrar mais informações sobre a licença no arquivo LICENSE. 
* [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)




