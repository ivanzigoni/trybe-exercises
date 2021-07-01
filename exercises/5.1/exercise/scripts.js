 /*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) 
    2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    3. Crie uma função que mude a cor do quadrado vermelho para branco.
    4. Crie uma função que corrija o texto da tag <h1>.
    5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

const paragraph = document.getElementsByTagName("p")[1]
const divToTurnYellow = document.getElementsByClassName("main-content")[0]
const divToTurnWhite = document.getElementsByClassName("center-content")[0]
const correctingText = document.getElementsByClassName("title")[0]
const testingUp = Array.from(document.getElementsByTagName("p"))




function nextTwoYears(param) {
     param.innerText = "(Não gaste tempdasdasdaso pensando no texto e sim realizando o exercício)"
    
    
}

function changeToYellow(param) {
    param.style.backgroundColor = "#333"
}

function changeToWhite(param) {
    param.style.backgroundColor = "white"
}

function textCorrector(param) {
    param.innerText = "Exercício 5.1 - JavaScript"
}

function toUpp (param) {
    for (let i = 0; i < param.length; i += 1) {
        param[i].innerText = param[i].innerText.toUpperCase()
    }
    
}

nextTwoYears(paragraph)
changeToYellow(divToTurnYellow)
changeToWhite(divToTurnWhite)
textCorrector(correctingText)
toUpp(testingUp)