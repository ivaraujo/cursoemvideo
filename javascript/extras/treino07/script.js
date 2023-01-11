/* 
    Adiciona um valor dentro de uma INPUT para enviar para o Banco de Dados
*/


function adicionar(){
    let num = document.querySelector('input#txtnum')

    if(num.value.length == 0){
        window.alert('Preencha o campo antes de adicionar')
        num.focus()
    }
    else{                
        let res = document.querySelector("[id='txtres']").value = Number(num.value)
        num.value = ''
    }
    
}