class NegociacaoController{


    adiciona(event){
        event.preventDefault()
        
        let $ = document.querySelector.bind(document)  // Atribuindo a função 'querySelector' na variavel $

        let inputData = $("#data")
        let inputQuantidade = $("#quantidade")
        let inputValor = $("#valor")

        console.log(inputData.value)
        console.log(inputQuantidade.value)
        console.log(inputValor.value)
    }
}