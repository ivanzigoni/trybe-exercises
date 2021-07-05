
// Acesse o elemento elementoOndeVoceEsta .
const elementWhereAreYou = document.body.querySelector("#elementoOndeVoceEsta")


// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const elementParent = elementWhereAreYou.parentNode
elementParent.style.backgroundColor = "blue";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const firstChildOfChild = elementWhereAreYou.childNodes[1]

// Acesse o primeiroFilho a partir de pai .
const firstChildFromPai = document.querySelector("#pai").firstElementChild

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
const firstChildFromOndeCeTa = document.querySelector("#elementoOndeVoceEsta").previousElementSibling

// acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const attentionFromOndeCeTa = document.querySelector('#elementoOndeVoceEsta').nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta 
const thirdChildFromOndeCeTa = document.querySelector('#elementoOndeVoceEsta').nextElementSibling

// Agora acesse o terceiroFilho a partir de pai
const thirdChildFromPai = document.querySelector("#pai").childNodes[5]

// Crie um irmão para elementoOndeVoceEsta .
const creatingDiv = document.createElement('div')
const siblingForOndeCeTa = document.querySelector('#pai')
siblingForOndeCeTa.appendChild(creatingDiv)
creatingDiv.innerText = 'testeste'

// Crie um filho para elementoOndeVoceEsta .

const childForOndeCeTa = document.querySelector('#elementoOndeVoceEsta')
childForOndeCeTa.appendChild(creatingDiv)

// primeiroFilhoDoFilho

const fiDoFi = document.querySelector("#primeiroFilhoDoFilho")
fiDoFi.appendChild(creatingDiv)

// A partir desse filho criado, acesse terceiroFilho

const fiDoFiDoFi = document.querySelector("#primeiroFilhoDoFilho").parentElement.nextElementSibling

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 

// const firstChild = document.querySelector("#primeiroFilho")
// firstChild.remove()
// const thirdChild = document.querySelector('#terceiroFilho')
// thirdChild.remove()
// const lastChild = document.querySelector('#segundoEUltimoFilhoDoFilho')
// lastChild.remove()
// const forthChild = document.querySelector('#quartoEUltimoFilho')
// forthChild.remove()

const teste = [document.querySelector("#primeiroFilho"), document.querySelector('#terceiroFilho'), document.querySelector('#segundoEUltimoFilhoDoFilho'), document.querySelector('#quartoEUltimoFilho')];

for (let i = 0; i < teste.length; i += 1) {
    teste[i].remove()
}





