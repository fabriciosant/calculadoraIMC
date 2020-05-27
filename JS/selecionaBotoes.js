//variaveis para selecionar o sexo
var mulher = document.getElementById('feminino')
var homem = document.getElementById('masculino')


//Funções para aterar as cores dos botões selecionados
function clickMulher() {
    mulher.style.background = '#fa6c88'
    mulher.style.color = "#fff"
    homem.style.background = "#fff"
    homem.style.color = '#606060'
}

function clickHomem() {
    homem.style.background = '#0b5ffcfb'
    homem.style.color = '#fff'
    mulher.style.background = '#fff'
    mulher.style.color = '#606060'
}

//variaveis para as atividades físicas
var sedentaria = document.getElementById('sedentaria')
var moderada = document.getElementById('moderada')
var intensa = document.getElementById('intensa')


//Funções para alterar as cores dos botões
function formaSedentaria(){
    sedentaria.style.background = '#fc826d'
    sedentaria.style.color = '#fff'
    moderada.style.background = '#fff'
    moderada.style.color ='#606060'
    intensa.style.background = '#fff'
    intensa.style.color = '#606060'
}

function formaModerada(){
    moderada.style.background = '#5680f5'
    moderada.style.color = '#fff'
    sedentaria.style.background = '#fff'
    sedentaria.style.color ='#606060'
    intensa.style.background = '#fff'
    intensa.style.color = '#606060'
}

function formaIntensa(){
    intensa.style.background = '#167903a6'
    intensa.style.color = '#fff'
    moderada.style.background = '#fff'
    moderada.style.color ='#606060'
    sedentaria.style.background = '#fff'
    sedentaria.style.color = '#606060'
}




