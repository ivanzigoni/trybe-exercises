// 1Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

const body = document.body;
const createH1 = document.createElement("h1");
createH1.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(createH1);


// 2Adicione a tag div com a classe main-content como filho da tag body ;

const createDiv = document.createElement('div')
createDiv.classList.add('main-content');
body.appendChild(createDiv);

// 3Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

const createDiv2 = document.createElement('div');
createDiv2.classList.add('center-content');
createDiv.appendChild(createDiv2);

// 4Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

const newP = document.createElement('p');
newP.innerText = "Algum texto!";
createDiv2.appendChild(newP);

// 5Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

const createDiv3 = document.createElement('div');
createDiv3.classList.add('left-content');
createDiv.appendChild(createDiv3);

// 6Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

const createDiv4 = document.createElement('div');
createDiv4.classList.add('right-content');
createDiv.appendChild(createDiv4)

// 7Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

const createImg = document.createElement('img');
createImg.classList.add('small-image');
createImg.src = "https://picsum.photos/200";
createDiv3.appendChild(createImg);

// 8Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

const listUL = document.createElement('ul');
createDiv4.appendChild(listUL)

for (let i = 0; i < 10; i += 1) {
    let createLi = document.createElement('li');
    listUL.appendChild(createLi);
}

// 9Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for( let i = 0; i < 3; i += 1) {
    const newh3 = document.createElement('h3');
    newh3.innerText = "testestesteste"
    newh3.classList.add('description')
    createDiv.append(newh3)
}

// 10Adicione a classe title na tag h1 criada;

createH1.classList.add('title')

// 11Adicione a classe description nas 3 tags h3 criadas;
// feito no for loop

// 12Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() 

const teste = document.getElementsByTagName('div')[2];
teste.remove()

// 13Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// feito no css

let margem = document.getElementsByClassName('right-content')[0];

margem.style.margin = "auto";

// 14Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

createDiv.style.backgroundColor = "green";

// 15Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

for (let i = 0; i < 2; i += 1 ) { 
    let deleteLi = document.querySelector('ul')
    let lastLi = deleteLi.querySelector('li:last-child')
    lastLi.remove()
}




