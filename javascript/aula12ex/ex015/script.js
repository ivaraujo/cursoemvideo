function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(f_ano.value.length == 0 || Number(f_ano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
       
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 11){
                //CRIANÇA
                img.setAttribute('src','crianca-H.png')
            }
            else if(idade < 18){
                //ADOLECENTE
                img.setAttribute('src','adolecente-H.png')
            }
            else if(idade < 30){
                //JOVEM
                img.setAttribute('src','jovem-H.png')
            }
            else if(idade < 50){
                //ADULTO
                img.setAttribute('src','adulto-H.png')
            }
            else{
                //IDOSO
                img.setAttribute('src','idoso-H.png')
            }
        }
        else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 11){
                //CRIANÇA
                img.setAttribute('src','crianca-M.png')
            }
            else if(idade < 18){
                //ADOLECENTE
                img.setAttribute('src','adolecente-M.png')
            }
            else if(idade < 30){
                //JOVEM
                img.setAttribute('src','jovem-M.png')
            }
            else if(idade < 50){
                //ADULTO
                img.setAttribute('src','adulto-M.png')
            }
            else{
                //IDOSO
                img.setAttribute('src','idoso-M.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que vocé é ${genero} e tem ${idade} anos.`
    res.appendChild(img)
}