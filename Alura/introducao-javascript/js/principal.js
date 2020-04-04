var titulo = document.querySelector(".titulo")
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    var imc = paciente.querySelector(".info-imc")

    var pesoEhValido = true
    var alturaEhValido = true

    if (peso <= 0 || peso >= 1000){
        imc.textContent = 'Peso Invalido !'
        pesoEhValido = false
        paciente.classList.add("paciente-invalido")
    }
    
    if (altura <= 0 || altura >= 4.00){
        imc.textContent = 'Peso Invalido !'
        alturaEhValido = false
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValido){
        var calc_imc = peso / (altura * altura)
        // imc.innerHTML = calc_imc
        imc.textContent = calc_imc.toFixed(2)
    }
}

// Utilizando uma função anonima
titulo.addEventListener("click", function(){
    console.log('Eu fui clicado !!')
})


var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", function(event){
    event.preventDefault()
    alert("Fui clicado !!")
})

// botao.addEventListener("click", function(){
//     alert("Botão clicado !!")
// })

// botao.addEventListener("mouseenter", function(){
//     botao.classList.add("botao-selecionado")
// })

// botao.addEventListener("mouseout", function(){
//     botao.style.background = '#0c8cd3'
// })