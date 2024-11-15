# Front-End - Sistema de Cadastro de Clientes

Este repositório contém o código-fonte da parte front-end do **Sistema de Cadastro de Clientes**, desenvolvido utilizando **React** e **Vite**. A aplicação oferece uma interface responsiva e moderna, permitindo que os usuários cadastrem, atualizem, excluam e visualizem clientes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário interativas.
- **Vite**: Ferramenta de build de próxima geração que oferece uma experiência de desenvolvimento mais rápida e eficiente.
- **Material-UI**: Conjunto de componentes React prontos para uso que ajudam na construção de interfaces de usuário atraentes e acessíveis.
- **Axios**: Cliente HTTP para facilitar a comunicação com o back-end e a manipulação de requisições.
- **TypeScript**: Superset de JavaScript que traz tipagem estática ao código, aumentando a robustez e clareza durante o desenvolvimento.
- **React Router**: Biblioteca para gerenciar a navegação e rotas dentro da aplicação.

## Funcionalidades da Aplicação

- **Tela Inicial**: O usuário pode inserir seu nome e será redirecionado para a tela com a lista de clientes cadastrados.
- **Tela de Clientes**: Listagem de clientes cadastrados com as opções de adicionar, atualizar, excluir e selecionar um cliente.
- **Tela de Visualização**: Detalhes de um cliente selecionado.

## Como Rodar o Front-End

### Pré-requisitos

- **Node.js**: Versão 18.x ou superior.
- **NPM ou Yarn**: Gerenciador de pacotes para instalar dependências.

### Passos para rodar o projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/paullo97/test_fullstack_teddy.git
   cd front-end
   ```

2. Instale as Dependências:
  ```bash
    npm install
  ```

3. Inicie o servidor de Desenvolvimento
 ```bash 
  npm run dev
 ```

4. Acesse a Aplicação
  ```bash
    http://localhost:5173
  ```


## Como Funciona
  A aplicação utiliza o Vite para otimizar a experiência de desenvolvimento. Quando o servidor estiver rodando, ele irá compilar o código em tempo real e recarregar a página automaticamente.

  As requisições HTTP para o back-end são feitas utilizando a biblioteca Axios, que se comunica com a API criada em Nest.js.
  
  A aplicação é responsiva, o que significa que ela se adapta automaticamente a diferentes tamanhos de tela, tornando-a acessível tanto para dispositivos móveis quanto para desktops.

### Melhorias Possíveis
- Autenticação: Adicionar funcionalidades de login e autenticação para acesso restrito.
- Validação de Formulários: Implementar validações nos formulários de cadastro e atualização de clientes.
- Armazenamento Local: Adicionar suporte para armazenamento de dados no navegador, como o localStorage, para persistir informações entre as sessões do usuário.
- Testes: Implementar testes unitários e de integração para garantir o funcionamento correto da aplicação.