# Quiz Bootstrap

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Quiz-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)

Quiz interativo criado com Bootstrap e JavaScript puro. O projeto apresenta perguntas em modal, controla progresso, calcula pontuacao e permite reiniciar a rodada.

## Demo

[Acessar projeto online](https://bs-quiz.vercel.app)

## Funcionalidades

- Inicio do quiz por botao central.
- Perguntas exibidas em modal Bootstrap.
- Alternativas clicaveis.
- Barra de progresso animada.
- Calculo de percentual de acertos.
- Tela final com resultado.
- Opcao para desistir ou jogar novamente.

## Stack

| Tecnologia | Uso |
| --- | --- |
| HTML | Estrutura da pagina |
| Bootstrap | Modal, botoes, cards e progresso |
| CSS | Ajustes visuais |
| JavaScript | Logica do quiz |

## Como executar

Abra o arquivo `index.html` no navegador.

## Estrutura

```text
.
|-- index.html
`-- assets/
    |-- css/
    |-- images/
    `-- js/
        |-- questions.js
        `-- script.js
```

## Personalizacao

As perguntas ficam em `assets/js/questions.js`. Para adicionar novas questoes, inclua novos objetos seguindo o formato:

```js
{
  question: 'Pergunta',
  options: ['Opcao A', 'Opcao B', 'Opcao C'],
  answer: 0
}
```

## Autor

Feito por [Maycon Marques](https://github.com/marquesmaycon) com apoio dos estudos da B7Web.
