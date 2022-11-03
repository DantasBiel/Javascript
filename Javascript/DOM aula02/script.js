//classList.add()-> Cria um classificador

//createElement() -> cria um elemento
/*
const explicacao = document.querySelector('div')
explicacao.classList.add("Gabriel")

const texto = document.createElement('p')
const item = explicacao.appendChild(texto)

explicacao.classList.remove('Gabriel')
*/

const InputElement = document.querySelector('.new-tasks-input')
const addTaksButton = document.querySelector('.new-taks-button')
const taskContainer = document.querySelector('.tasks-container')

function validarButao(){
    if(InputElement.value === ''){
        InputElement.classList.add('erro')
    }else{
        InputElement.classList.remove ('erro')
        const texto = document.createElement('p')
        texto.innerText = InputElement.value
        
        taskContainer.appendChild(texto)
    }
}

addTaksButton.addEventListener('click', validarButao)