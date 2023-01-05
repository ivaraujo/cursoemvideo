let valores = [8,9,6,2,3]
valores.sort()

//Versão do FOR tradicional

for(let pos=0;pos<valores.length;pos++){
    console.log(`Dentro do FOR, a posição ${pos} tem valor ${valores[pos]}`)
}

//Versão do FOR simplificada

for(let pos in valores){
    console.log(`Posição ${pos} tem valor igual a ${valores[pos]}`)
}