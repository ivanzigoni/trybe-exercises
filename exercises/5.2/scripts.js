
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
