//Boolean

//Existem dois valores booleanos fals ou true
//var LulaEleito = false
//var LulaEleito = true

//if(LulaEleito){
   // console.log('vamos comer picanha')
//}else{
  // console.log("Bolsonaro vai criar o pix")
//}

//Operadores relacionais

/*
== -> igualdade
 < -> maior que 
 < -> menor que 
!= -> diferente
>= -> maior ou igual
<= => menor ou igual
*/

//var a = 1,
  //  b = 5,
   // c = 2,
  //  d = 1;

//console.log(a > b)
//console.log(a < b)
//console.log(a == d)
//console.log(b >= a)
//console.log(c <= b)
//console.log(d != a)
//console.log(d != b)

//Condiçoes
/*
 if e else 
 if é condição verdadeira ("Se for verdade...")
 else é a condição falsa("Se não...é falsa")

 if (condição){
    bloco verdadeiro
 }else{
    bloco falso
 }
 */

 /*var graziFazFaculdade = true
 if (graziFazFaculdade){
    console.log("grazi vai se formar")
 }else{
    console.log("grazi não faz faculdade")
 }*/
 
//let valor1 = 5,
  //  valor2 = 7,
  //  valor3 = 5,
  //  valor4 = 2;

//if (valor1 > valor2){
   // console.log("valor1 é maoir que valor2")
//}else{
  //  console.log("valor1 não é maior que valor2")
//}

/*if (valor4 != valor3){
    console.log("valor4 é diferente que valor3")
}else{
    console.log("valor4 não é diferente que valor3")
}

const nome = prompt('Digite o seu nome: ')
console.log(nome)
*/

//Condicionais Else If 
/*
var graziPossuiGradução = true; 
var graziPossuiDouturado = false;

if (graziPossuiDouturado){
    console.log('Possui graduação e doutorado')
}else if (graziPossuiGradução){
    console.log('Possui graduação, mas não possui doutorado')
}else{
    console.log('Não possui graduação')
}
*/
//Categoria x Produto
/*var categoria = prompt("Digite a categoria do produto")

if (categoria == 1){
    console.log('Preço R$10,00')
}else if (categoria == 2){
    console.log('Preço é R$18,00')
}else if (categoria == 3){
    console.log('Preço é R$23,00')
}else if (categoria == 4){
    console.log('Preço é R$26,00')
}else if (categoria == 5){
    console.log('Preço é R$31,00')
}else {
    console.log("Categoria inválida, digite um valor entre 1 e 5")
}
*/

//Switch e Case

/*var corFavorita = 'Preto'

switch(corFavorita){
    case 'Preto':
        console.log('Yasmin usava calça colorida.')
        break;
    case 'Vermelho':
        console.log('Yasmin apaixonada')
        break;
}

var corFavorita = 'Azul'

switch(corFavorita){
    case 'Azul':
        console.log('Yasmin usava bulsa colorida.')
        break;
    case 'Amarelo':
        console.log('Yasmin apaixonada')
        break;
}
*/

//Operadores lógicos &&
//&&= e

//console.log(true && true) //
//console.log(false && true) // 

//Exercicios

//Verifique se a sua idade é maior do que a de algum parente

/*const idadepessoa = prompt('Digite sua idade')
const idadepessoa2 = prompt('Digite outra idade')
const operacao = prompt("Qual idade você deseja ver")

if (operacao == "-"){
    console.log(idadepessoa - idadepessoa2)
}*/

//Escreva um programa que pergunte a distancia que um passageiro deseja percorrer em km. Calcule o preço da passagem, cobrando R$0,50 por km para viagens de até 200km, e R$0, 45 para viagens mais longas.   

var km = parseInt(prompt("digite a distancia que quer percorrer em km"))

if (km <= 200){
    var custo =km * 0.5;
    console.log(custo) 
}else if (km > 200){
    var custo2 = km * 0.45
    console.log(custo2)
}