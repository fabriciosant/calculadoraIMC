var calcular = document.getElementById('verificar')

function calcularIMC(event){
    event.preventDefault()
    var form = document.getElementById('form')

    var nome = form.usuario.value
    var idade = form.anos.value
    var peso = form.quilos.value
    var altura = form.tamanho.value
    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
}
