const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

function imc(){
    if(nome.value !==''){
        const valorIMC = (peso.value / (altura.value**2)).toFixed(1);

        if(valorIMC <= 18){
            resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está abaixo do peso ideal`

        }else if(valorIMC > 18 && valorIMC <= 25){ 
            resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está no peso ideal`

        }else if(valorIMC > 25 && valorIMC < 30){
            resultado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está levemente acima do peso ideal`

        }else{
            resultado.textContent = 'Você está acima do peso'
        }

    }else{
        alert('Preencha o campo vazio')
    }
}

calcular.addEventListener('click',imc)