//Funções 

/*
  function nome (parâmetros){
      bloco de ações 
  }
*/

function soma(a,b){
    var total = a + b 
    return console.log(total)
}

soma(7,8)

//crie uma função que ache a área de um retângulo de medidas diferentes.
function Retângulo(c,d){
    var Retângulo = total = c * d 
    return console.log(Retângulo)
}

Retângulo(10,5)//Argumento
//crie uma função que ache a área de um quadrado.
function multiplicacao(a,b){
    var total = a * b
    return console.log(total)
}

multiplicacao(17,17)

function pi(){
    return 3.1415
}

var total = 5 + pi();//8.1415

//Parênteses executa a função

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta do céu'
    }else if(cor ==='verde'){
        return 'Você gosta de mato'
    }else{
        return 'Você gosta de nada'
    }
}

corFavorita ("Azul")


function weslei(){
  console.log('Cachorro Louco')
  return
}

addEventListener('Click', weslei())