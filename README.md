# S2 | Teste Técnico - Frontend 
🏁 Entrega - Desafio: vaga Front-End - JUNIOR\
Projeto Fullstack apresentado à Kenzie Academy\
Desenvolvido com React, Chakra UI, React-Redux, React-Thunk, Axios e React-Router-Dom.

## Instalação

Instale este projeto com

```bash
  yarn install
```
## Scripts disponíveis

Na pasta do projeto, use:

```bash
  yarn start
```
para rodar em modo de desenvolvimento;

```bash
  yarn build
```
para gerar o app para produção na pasta `build`. 

Abra [http://localhost:3000](http://localhost:3000) em seu navegador. \
Cada link leva a um ambiente de teste de conexão com a api conforme a configuração descrita abaixo.\
Toasts específicos são exibidos conforme o ambiente; além de um toast alertando sobre estado offline do browser:

| Links              | Url        | Link de conexão à API                                              |
| :----------------- | :--------- | :----------------------------------------------------------------- |
| `Página default`   | `/default` | `https://frontend-challenge-7bu3nxh76a-uc.a.run.app`               |
| `Delay de conexão` | `/delay`   | `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=2500`    |
| `Tempo esgotado`   | `/timeout` | `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=10000`   |
| `Erro no servidor` | `/error`   | `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError` |

## Estrutura de pastas

    .
    ├── (raiz)
    │   ├── public
    │   └── src          
    │       ├── components              # Principais componentes          
    │       │   ├── form.component.jsx
    │       │   └── toast.component.jsx
    │       ├── pages                   # Páginas de apresentação e demonstração
    │       │   ├── default.page.jsx         
    │       │   ├── delay.page.jsx         
    │       │   ├── error.page.jsx         
    │       │   ├── start.page.jsx         
    │       │   └── timeout.page.jsx
    │       ├── redux                   # Redux
    │       │   ├── reducers.js         
    │       │   ├── store.js
    │       │   └── thunks.js
    │       ├── App.js          
    │       ├── app.css          
    │       ├── index.js          
    │       └── index.css
    ├── README.md
    └── ... (demais arquivos de configuração)
