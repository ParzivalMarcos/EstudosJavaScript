function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("#res")

    if (fAno.value.length == 0 || fAno.value > ano){
        alert('Erro de ano, tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', './img/foto-bebe-m.png')
            }else if(idade < 21){
                // jovem
            }else if(idade < 50){
                // adulto
            }else{
                // idoso
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
            }else if(idade < 21){
                // jovem
            }else if(idade < 50){
                // adulto
            }else{
                // idoso
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}