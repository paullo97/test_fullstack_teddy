<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo Nest" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Um framework progressivo para <a href="http://nodejs.org" target="_blank">Node.js</a>, utilizado para construir aplicações de servidor eficientes e escaláveis.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Cobertura de Testes" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Doe para nós" /></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Apoie-nos"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir" alt="Siga-nos no Twitter"></a>
</p>

## Descrição do Sistema

Este sistema é uma **aplicação de cadastro de clientes** que permite aos usuários:

- Inserir um nome na tela inicial e ser redirecionado para uma lista com todos os clientes cadastrados.
- Visualizar, adicionar, editar e excluir clientes da lista.
- Visualizar detalhes de um cliente selecionado.

### Funcionalidades

1. **Tela Inicial**: O usuário insere seu nome, e, ao confirmar, é redirecionado para a tela com a lista de clientes cadastrados.
2. **Tela de Clientes**: Nessa tela, o usuário pode:
   - **Cadastrar** novos clientes.
   - **Selecionar**, **atualizar** ou **excluir** um cliente existente.
3. **Tela de Visualização**: Exibe os detalhes de um cliente selecionado da lista, permitindo ver informações adicionais.


## Tecnologias Utilizadas

O backend deste sistema foi desenvolvido com as seguintes tecnologias:

- **Nest.js**: Framework Node.js que utiliza TypeScript, projetado para criar aplicações server-side eficientes e escaláveis.
- **TypeORM**: ORM (Object-Relational Mapper) utilizado para simplificar a interação com o banco de dados relacional PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações dos clientes.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, garantindo mais segurança e clareza no código.
- **Swagger**: Ferramenta para documentar e testar APIs diretamente no navegador.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de que a versão do Node.js seja 18.x ou superior.
- **PostgreSQL**: Instale o PostgreSQL e configure-o para o banco de dados da aplicação.

### Passos para rodar o backend

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/paullo97/test_fullstack_teddy.git
   cd back
  ``` 
  
2. Instale as Dependências
```bash
  npm install
```

3. Configure a conexão com o banco de dados
  - Crie um banco de dados no PostgreSQL
  - Configure a conexão no arquivo **app.module.ts**

4. Rodando as migrações
  ```bash
    npm run migration:run
  ```

5. inicie o Servidor
  ```bash
    npm run start
  ```

6. Acesse a API
- A API estará disponível em http://localhost:3000.
- A documentação da API pode ser acessada em http://localhost:3000/api (Swagger).

<hr />

**Disclaimer**:
Durante o processo de desenvolvimento do sistema backend, houve um imprevisto com o GitHub, que acabou interpretando uma das pastas como um sub-repositório, resultando na perda de todos os commits realizados até o momento. Infelizmente, isso afetou o histórico de versões do projeto.

Peço sua compreensão e paciência em relação a esse ocorrido, e estou tomando as medidas necessárias para garantir que o projeto continue de forma estável e segura a partir deste ponto.