// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;

// Functions
function showQuestion() {
    if(questions[currentQuestion]) {
        // Crescimento da barra de progresso
        let pct = (currentQuestion / questions.length) * 100
        document.querySelector('.progress-bar').style.width = `${pct}%`

        // Escondendo a interface de pontuação
        document.querySelector(".score-area").style.display = 'none';

        // Exibindo a questão
        let q = questions[currentQuestion];
        document.querySelector(".question").innerHTML = q.question

        // Exibindo as alternativas
        let optionsHtml = ''
        for(let i in q.options) {
            optionsHtml += 
            `<div class="option list-group-item list-group-item-action" style="cursor: pointer" data-op="${i}">
                <span class="badge text-bg-info">${+i+1}</span> ${q.options[i]}
            </div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        // Adicionando evento de clique em cada alternativa
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        })

    } else {
        // Quando não há mais perguntas, o teste finaliza com a função:
        finishQuiz();
    }
}

// Função disparada ao clicar nas opções das questões
function optionClickEvent(e) {
    // Armazenando o valor do atributo 'data-op' da alternativa clicada em uma variável
    let clickedOption = +e.target.getAttribute('data-op');

    // Verificando acerto 
    if(questions[currentQuestion].answer === clickedOption) {
        // Se houver acerto, respostas corretas +1
        correctAnswers++
    }

    // Após responder, muda-se a questão
    currentQuestion++;
    showQuestion();
}

// Função disparada ao responder última questão/finalizar o quiz
function finishQuiz() {
    // Completando a barra de progresso
    document.querySelector('.progress-bar').style.width = "100%";

    // Fechando/escondendo o modal
    let myModalEl = document.querySelector('#modalQuestions');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    // Preenchendo e exibindo a area de pontuação
    let points = (correctAnswers / questions.length) * 100;
    document.querySelector('.scorePct').innerText = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerText = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;
    document.querySelector(".score-area").style.display = 'block';

    // Preenchendo frases e estilizando texto de acordo com o desempenho
    if(points < 30) {
        document.querySelector(".scoreText1").style.innerText = 'Que pena...'
        document.querySelector(".scorePct").style.color = '#F00'
    } else if(points >= 30 && points < 70) {
        document.querySelector(".scoreText1").style.innerText = 'Boa!'
        document.querySelector(".scorePct").style.color = '#FF0'
    } else if(points >= 70) {
        document.querySelector(".scoreText1").style.innerText = 'Parabéns!'
        document.querySelector(".scorePct").style.color = '#0D630D'; 
    }

    // Escondendo o botão de iniciar
    document.querySelector('#startButton').style.display = 'none';
}

// Função disparada ao reinicar o quiz pela area de resultados
function resetEvent() {
    // Resetando questões e pontuação
    correctAnswers = 0;
    currentQuestion = 0;

    // Reexibindo modal
    showQuestion()
}

// Função disparada ao clicar no botão desistir dentro do modal
function giveUp() {
    // Resetando questões e pontuação
    correctAnswers = 0;
    currentQuestion = 0;

    // Zerando barra de progresso
    document.querySelector('.progress-bar').style.width = '0%'

    // Reexibindo o botão inicial caso ele tenha sido ocultado
    document.querySelector('#startButton').style.display = 'block';
}