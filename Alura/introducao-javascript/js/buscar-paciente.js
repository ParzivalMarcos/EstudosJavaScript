var botaoAdicionar = document.querySelector("#buscar-paciente")
botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta)  // Convertendo de json para javascript

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
        })
    })

    xhr.send()
})