//Faça um programa que peça a idade do usuário. Se for maior que 18 a mensagem deve ser: "Vc pode ir preso". Se for de menor "Seus pais serão presos"

const usuário = prompt("Você pode ir preso")
let idade = 18;

if(usuário < idade){
  console.log(`${usuário} é maior que ${idade}`)
}else{
    alert(`${usuário} é maior que ${idade}`)
    console.log(`${usuário} é maior que ${idade}`)
}

//Escreva um programa que pergunte a velocidade do carro de um usuário. Caso ultrapasse 80km/h, exiba uma mensagem dizendo que o usuário foi multado no caso, exiba o valor da multa, cobrando 5 reais por cima de 80km/h

const Carrovelocidade = prompt("qual sua velocidade")
let velocidade = 80;

