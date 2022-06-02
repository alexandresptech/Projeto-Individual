var perguntas = [
    'Quem é o Deus dos mares?',
    'Quem é o marido da deusa Afrodite?',
    'Qual criatura ficou encarregada de proteger os portões do submundo?'
]

var respostas = [
    'Poseidon', 
    'Hefesto', 
    'Cérbero'
]

var button_1 = [
    'Poseidon',
    'Ares',
    'Minotauro',
]
var button_2 = [
    'Netuno',
    'Hefesto',
    'Dragão',
]
var button_3 = [
    'Aquaman',
    'Hermes',
    'Hidra',
]
var button_4 = [
    'Zeus',
    'Hades',
    'Cérbero',
]

var pontos = 0

var contagem = 0

function start() {
    cont_correctAnswer = 0
    inicio.style.display = 'none'
    jogo.style.display = 'block'
    qtd_pontos.innerHTML = pontos

    // bt_destroyGame.style.display = 'block';
    // div_questions.style.display = 'block';
    // renderGrid()
    gameSequence()
}

function gameSequence() {
    titulo.innerHTML = `<b>${contagem + 1}.</b> ${perguntas[contagem]}` 
    botao_1.innerHTML = button_1
    botao_2.innerHTML = button_2
    botao_3.innerHTML = button_3
    botao_4.innerHTML = button_4
}