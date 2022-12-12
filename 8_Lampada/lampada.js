var lamp = window.document.getElementById('lampada') //Adicionamos a img svg da lampada na função

function estaQuebrada() {
    return lamp.src.indexOf('lampadaquebrada') > -1
}

function Ligar() {
    if(!estaQuebrada()) {
    lamp.src = 'lampadaligada.svg'}
}
function Desligar() {
    if(!estaQuebrada()) {
    lamp.src = 'lampadadesl.svg'}
}

lamp.addEventListener('click', Quebrar) // O primeiro parâmetro é o evento que queremos  'click' e o segundo é o que deve ser executado, no caso, a função Quebrar.
function Quebrar(){
    lamp.src = 'lampadaquebrada.svg'
}
