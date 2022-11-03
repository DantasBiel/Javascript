//Objetos
//Conjuntos de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
    nome: 'dantas',
    idade: 19,
    profissão: 'estudante',
    maiordeidade: true,
}
console.log(pessoa)
console.table(pessoa)
pessoa.nome//Dantas

//Método
//É uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado*lado;
    },
    perimetro: function(lado){
        return quadrado.lados* lado;
    }
}

quadrado.area(5)

//Acesse propriedades de um objeto utilizando o ponto

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

var bg = menu.backgroundColor

//Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa1 ={
    nome1:'Gabriel',
    sobrenome: 'Andrade',
}
console.log(pessoa1)
//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    late: true,
}
console.table(cachorro)

//Arrays

//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável

var vídeoGames = ['Ps4', 'Switch',
'Xbox'];
vídeoGames[0]

//Métodos e Propriedades de uma array

console.log(vídeoGames.length);