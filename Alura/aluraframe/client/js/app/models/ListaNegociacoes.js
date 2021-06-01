class ListaNegociacoes{

    constructor(){

        this._negociacoes = []
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao)
    }

    get negociacoes(){
        
        return [].concat(this._negociacoes)
    }

    /**
     * Em get negociacoes() retorna-se uma cópia da lista verdadeira, assim protegendo a lista original
     */
}