let num = [5,8,4]
num[3] = 6 
num.push(7) 



/*
num[nova posição] = valor adicionado //Adiciona o novo número diretamente
num.push(valor adicionado) //Adiciona o novo número no final
num.length //Informa o cumprimento do vetor (Número de elementos).
num.sort() //Escreve os elementos dentro do Array de forma crescente.
num.indexOf(valor buscado) // Vai buscar o valor dentro do Array e informar a posição dele.
*/


console.log(`Nosso vertor é: ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Os valores ordenados do vetor são: ${num.sort()}`)

let busca = Number(11)
let pos = num.indexOf(busca)

if(pos == -1){
    console.log(`Valor ${busca} não encontrado`)
}
else{
    console.log(`O valor ${busca} está na posição ${pos}`)
}