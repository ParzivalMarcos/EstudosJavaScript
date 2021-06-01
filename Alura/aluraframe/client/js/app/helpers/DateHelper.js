class DateHelper{

    constructor(){

        throw new Error("DateHelper não pode ser instanciada")
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Deve estar no formado aaaa-mm-dd")
        return new Date(...texto
            .split('-')
            .map((item, indice) => item - indice % 2))
    }

    /**
     * Métodos static são métodos que podemos utilizar sem haver a necessidade de invocar uma instâcia da classe
     */
}