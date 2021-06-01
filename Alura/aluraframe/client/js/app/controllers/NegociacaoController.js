class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document)  // Atribuindo a função 'querySelector' na variavel $
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacoes = new ListaNegociacoes()

    }

    adiciona(event){
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaFormulario()
        console.log(this._listaNegociacoes.negociacoes)
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limpaFormulario(){

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }

        /**
         * let data = new Date(this._inputData.value.replace(/-/g, ',')) -> Outra forma utilizando expressões regulares
         * os '...' ja desmembra cada item do split, e passa como parametros separados para Date
         * Função map() recebe um iteravel e realiza alguma operação em cada item deste iteravel
         * Na mesma função map(), esta sendo utilizado o conceito de arrows functions
         * No exemplo, como possui apenas uma instrução, não é necessario utilizar o bloco '{}'
         * O '_' no inicio dos nome dos métodos, indica que estes mesmos só podem ser utilizados pela própria classe
         */
    }