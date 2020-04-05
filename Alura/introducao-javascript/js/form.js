// Pegando o botão
var botao = document.querySelector("#adicionar-paciente")

// Adicionando evendo de click no botão
botao.addEventListener("click", function(event){

    event.preventDefault()  // "Seguro uma ação padrão de um evendo do HTML"
    
    // Pegando o formulario
    var form = document.querySelector("#form-adiciona")
        
    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTR = montaTR(paciente)

    // Pegando a tabela HTML
    var tabela = document.querySelector("#tabela-pacientes")

    // Adicionando a TR como filha da tabela
    tabela.appendChild(pacienteTR)

    // Limpando campos
    form.reset()
})

function obtemPacienteDoFormulario(form){

    // Atriuindo valores aos campos do formulario, atravez do parametro 'name' do html
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTR(paciente){
    // Criando elementos da tabela HTML
    var pacienteTR = document.createElement("tr")
    pacienteTR.classList.add("paciente")


    // Atribuindo valores aos elementos HTML criados anteriormente    
    // Adicionando as TDs como filhas de TR
    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"))
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"))
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"))
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"))
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"))

    return pacienteTR
}

function montaTD(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}