//Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function soma(a,b,c,d){
var total = a+b+c+d
return console.log(total)
}

soma(4,4,4,4)
//Crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome
function nomecompleto(nome, sobrenome){
    var nomecidadao = nome + ""+
    sobrenome
console.log(nomecidadao)
}

nomecompleto('Gabriel','Dantas')
// Crie uma função que verifica se um número é par 

function par(numero){
    if(numero % 2 == 0){
        console.log('par')
    }else{
        console.log('impar')
    }
}

//var conta = numero % 2 == 0;
