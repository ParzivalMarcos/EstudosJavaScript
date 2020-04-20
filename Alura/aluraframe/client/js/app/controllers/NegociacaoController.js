class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document)  // Atribuindo a função 'querySelector' na variavel $
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

    }

    adiciona(event){
        event.preventDefault()

        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2))

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao)
    }

        /**
         * let data = new Date(this._inputData.value.replace(/-/g, ',')) -> Outra forma utilizando expressões regulares
         * os '...' ja desmembra cada item do split, e passa como parametros separados para Date
         * Função map() recebe um iteravel e realiza alguma operação em cada item deste iteravel
         * Na mesma função map(), esta sendo utilizado o conceito de arrows functions
         * No exemplo, como possui apenas uma instrução, não é necessario utilizar o bloco '{}'
         */
    }