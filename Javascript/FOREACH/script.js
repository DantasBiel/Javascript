//Array 

//É um grupo de valores. Serve para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'Ps4', 'Xbox'];

var numeros =[1, 2, 3]
var soma = numeros[0]+numeros[1]
console.log(soma)

videoGames.pop();//Remove o último item e retorna da Array 
videoGames.push('3DS');//Adiciona ao final da Array
videoGames.length//Retorna a quantidade de valores.

//While

var i = 0;
while(i<10){
    console.log(i)
    i = i + i
}

//for
/*for(var nomero = 0; numero <=10; numero = numero + 1){
    console.log(numero)

}
var videoGames = ['Switch', 'Ps4', 'Xbox'];
for(var b = 0; b < videoGames.length;  b = b + 1){
    console.log(videoGames[b])
}
*/
//ForEach
//ForEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays

var videoGames = ['Switch', 'Ps4', 'Xbox'];
videoGames.forEach(function(b, c){
    console.log(b,c)
})

//Crie um array com os anos que o brasil ganhou a copa 1959, 1962, 1970, 1994 e 2002
var copa =[1958, 1968, 1970, 1994, 2002]

//interaja com uma array utizando um loop, para mostrar no console a seguinte mensagem, o brasil ganhou a copa de 5 anos 
copa.forEach(function(a){
    console.log('O Brasil ganhou a copa de ${a}')
})