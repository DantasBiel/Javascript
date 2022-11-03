// Escreva um programa que leía dois numeros e que pergunte qual operação você deseja realizar. Você deve poder calcular somar (+), subtração(-) e multiplicação. Exiba o resultado da operação solicitada.

const valor1 = prompt('Digite um valor')
const valor2 = prompt('Digite outro valor')
const operacao = prompt("Qual operação você deseja fazer")

if(operacao == "+"){
    console.log(valor1 + valor2)
}else if (operacao == "-"){
    console.log(valor1 - valor2)
}else if (operacao == "*"){
    console.log(valor1 * valor2)
}else{
    console.log("Coloque uma operação válida")
}
