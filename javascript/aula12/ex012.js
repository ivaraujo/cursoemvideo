var agora = new Date();
var hora = agora.getHours();

console.log(`Agora são extamente ${hora} horas.`);

if(hora >=0 && hora < 6){
    
    console.log(`Tenha uma Boa Madrugada!`);
}
else if(hora < 12){
    
    console.log(`Tenha um Bom dia!`);
}
else if(hora < 18){
    
    console.log(`Tenha uma Boa tarde!`);
}
else{
    console.log(`Tenha uma Boa noite!`);
}