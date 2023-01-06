function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano')
    var msg = window.document.getElementById('msg')
    
    

    var idade = ano - Number(txtano.value)

    msg.innerHTML = `Você possui: ${idade} anos`
}