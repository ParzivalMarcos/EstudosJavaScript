var titulo = document.querySelector(".titulo")
titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelector("#primeiro_paciente")
var peso = paciente.querySelector(".info-peso").textContent
var altura = paciente.querySelector(".info-altura").textContent
var imc = paciente.querySelector(".info-imc")

var pesoEhValido = true
var alturaEhValido = true

if (peso <= 0 || peso >= 1000){
    alert("Peso invalido!!")
    pesoEhValido = false
}

if (altura <= 0 || altura >= 4.00){
    alert("Altura inválida !!")
    alturaEhValido = false
}

if (pesoEhValido && alturaEhValido){
    var calc_imc = peso / (altura * altura)
    // imc.innerHTML = calc_imc
    imc.textContent = calc_imc
}