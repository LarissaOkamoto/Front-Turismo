# Front-end: Projeto Integrador Front-end & Backend - Individual

**Tema**: Turismo: Bucketlist dos Pontos Turísticos

Projeto individual desenvolvido para a disciplina de Front-end, integrado à API REST desenvolvida na disciplina de Programação Web.

A aplicação foi construída em React e permite que o usuário cadastre, visualize e pesquise pontos turísticos. Os dados utilizados pela aplicação são obtidos por meio da API desenvolvida em Java e Spring Boot e persistidos em banco de dados relacional.

## Objetivo

O objetivo deste projeto é desenvolver uma aplicação Front-end em React integrada a uma API REST.

A aplicação permite:

* cadastrar novos pontos turísticos;
* visualizar os pontos turísticos cadastrados;
* pesquisar pontos turísticos pelo nome;
* visualizar informações detalhadas de cada ponto turístico;
* consumir dados persistidos pelo back-end;
* tratar situações de carregamento, sucesso e erro durante as requisições.

## Tecnologias utilizadas

* React
* JavaScript
* JSX
* Vite
* React Router DOM
* CSS Modules
* Fetch API
* Lucide React

## Funcionalidades

### Página inicial

A página inicial apresenta a proposta da aplicação e permite navegar entre as principais funcionalidades do sistema.

O usuário pode acessar:

* Página inicial;
* Cadastro de pontos turísticos;
* Lista de pontos turísticos.

A página também possui uma barra de pesquisa que direciona o usuário para a tela de destinos utilizando o nome informado.

### Cadastro de pontos turísticos

A aplicação possui uma tela específica para cadastro de pontos turísticos.

O formulário possui os seguintes campos:

1. Nome;
2. Cidade;
3. Descrição;
4. Classificação;
5. Gasto médio;
6. URL da imagem.

Os dados são enviados para a API utilizando o método HTTP `POST`.

### Listagem de pontos turísticos

A página de destinos realiza uma requisição para a API e apresenta todos os pontos turísticos cadastrados no banco de dados.

Cada ponto turístico é exibido por meio de um componente próprio.

As informações apresentadas incluem:

* nome;
* cidade;
* descrição;
* classificação;
* gasto médio;
* imagem.

### Pesquisa

A aplicação permite pesquisar pontos turísticos pelo nome.

A pesquisa pode ser realizada pela página inicial ou diretamente na página de destinos.

O Front-end envia o nome informado para a API, que realiza a consulta no banco de dados.

## Componentização

O projeto utiliza componentização em React.

Um dos principais componentes utilizados é:

```text
CardPontoTuristico
```

Esse componente é responsável pela apresentação individual dos dados de cada ponto turístico.

Estrutura principal do projeto:

```text
src/
├── assets/
│
├── componentes/
│   ├── CardPontoTuristico.jsx
│   └── CardPontoTuristico.module.css
│
├── pages/
│   ├── Home/
│   │   ├── index.jsx
│   │   └── styles.module.css
│   │
│   ├── Cadastro/
│   │   ├── index.jsx
│   │   └── styles.module.css
│   │
│   └── ListaPontosTuristicos/
│       ├── index.jsx
│       └── styles.module.css
│
├── main.jsx
└── routes.jsx
```

## Estado

A aplicação utiliza o hook `useState` para controlar dados que mudam durante a interação com o usuário.

Entre os estados utilizados estão:

```javascript
const [nome, setNome] = useState("");
const [cidade, setCidade] = useState("");
const [descricao, setDescricao] = useState("");
const [classificacao, setClassificacao] = useState("");
const [gastoMedio, setGastoMedio] = useState(0);
const [imagem, setImagem] = useState("");
const [mensagem, setMensagem] = useState("");
```

Na tela de consulta também são utilizados estados para:

* lista de pontos turísticos;
* nome pesquisado;
* carregamento;
* mensagens de erro.

## CSS Modules

A estilização da aplicação utiliza CSS Modules.

Exemplo:

```javascript
import style from "./styles.module.css";
```

Utilização:

```jsx
<div className={style.container}>
```

Dessa forma, os estilos ficam isolados por componente e evitam conflitos entre classes CSS.

## Integração com a API

Durante o desenvolvimento local, o Front-end utiliza a seguinte URL base:

```text
http://localhost:8080
```

A API é responsável por:

* validar os dados;
* aplicar regras de negócio;
* armazenar os dados;
* disponibilizar os registros para consulta.

## Endpoints utilizados pelo Front-end

### Listar pontos turísticos

```http
GET /pontosTuristicos
```

Exemplo:

```text
http://localhost:8080/pontosTuristicos
```

Esse endpoint retorna os pontos turísticos cadastrados.

### Cadastrar ponto turístico

```http
POST /pontosTuristicos
```

Exemplo:

```text
http://localhost:8080/pontosTuristicos
```

Exemplo de dados enviados:

```json
{
  "nome": "Parque Ibirapuera",
  "cidade": "São Paulo",
  "classificacao": "Parque",
  "descricao": "Um dos principais parques da cidade de São Paulo.",
  "gastoMedio": 30.00,
  "imagem": "https://exemplo.com/ibirapuera.jpg"
}
```

### Pesquisar ponto turístico

```http
GET /pontosTuristicos/pesquisa?nome={nome}
```

Exemplo:

```text
http://localhost:8080/pontosTuristicos/pesquisa?nome=ibirapuera
```

## Fluxo de integração

O fluxo de cadastro funciona da seguinte forma:

```text
Usuário
   ↓
Formulário React
   ↓
Fetch POST
   ↓
API Spring Boot
   ↓
Validação
   ↓
JdbcTemplate
   ↓
Banco de dados
```

O fluxo de consulta funciona da seguinte forma:

```text
Banco de dados
   ↓
JdbcTemplate
   ↓
API Spring Boot
   ↓
Fetch GET
   ↓
React
   ↓
CardPontoTuristico
```

## Tratamento das requisições

A aplicação possui tratamento para diferentes situações durante a comunicação com a API.

### Carregamento

Enquanto os dados estão sendo buscados:

```text
Carregando...
```

### Cadastro realizado com sucesso

```text
Ponto turístico cadastrado com sucesso!
```

### Dados inválidos

Quando a API retorna `400 Bad Request`:

```text
Preencha todos os campos corretamente.
```

### Ponto turístico duplicado

Quando a API retorna `409 Conflict`:

```text
Já existe um ponto turístico com esse nome.
```

### Erros inesperados

Caso ocorra algum problema de comunicação:

```text
Erro ao cadastrar ponto turístico.
```

## Como executar o projeto

### Pré-requisitos

Antes de executar o Front-end, é necessário possuir:

* Node.js;
* npm;
* back-end do projeto executando.

Para verificar a instalação do Node.js:

```bash
node --version
```

Para verificar o npm:

```bash
npm --version
```

## Instalação

Clone o repositório:

```bash
git clone <LINK-DO-REPOSITORIO-FRONTEND>
```

Entre na pasta do projeto:

```bash
cd front-turismo
```

Instale as dependências:

```bash
npm install
```

## Executando

Execute:

```bash
npm run dev
```

O Vite informará no terminal o endereço utilizado pela aplicação.

Normalmente:

```text
http://localhost:5173
```

Caso a porta esteja ocupada, o Vite poderá utilizar automaticamente outra porta, como:

```text
http://localhost:5174
```

ou outra disponível.

## Executando Front-end e Back-end juntos

Para utilizar todas as funcionalidades, o back-end deve estar executando em:

```text
http://localhost:8080
```

Depois, execute o Front-end:

```bash
npm run dev
```

O cliente React realizará as requisições para a API automaticamente.

## Rotas da aplicação

### Home

```text
/
```

### Cadastro

```text
/cadastro
```

### Pontos turísticos

```text
/pontos-turisticos
```

## Repositório do Back-end

A API utilizada por este projeto está disponível em:

```text
https://github.com/LarissaOkamoto/Backend-Turismo.git
```

## Requisitos atendidos

O projeto atende aos seguintes requisitos da disciplina:

* aplicação desenvolvida em React;
* utilização de JSX;
* utilização de estado;
* utilização de componentização;
* utilização de CSS Modules;
* formulário com mais de cinco campos;
* tela de cadastro;
* tela de consulta;
* integração com API REST;
* consumo de endpoint GET;
* consumo de endpoint POST;
* dados obtidos por meio da API;
* tratamento de carregamento;
* tratamento de sucesso;
* tratamento de erros;
* pesquisa de pontos turísticos;
* organização do código em componentes e páginas.

## Projeto acadêmico

Projeto desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas.

O objetivo da atividade é aplicar conceitos de desenvolvimento Front-end com React e integração com uma API REST desenvolvida em Java e Spring Boot.

