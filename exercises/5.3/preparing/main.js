const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const myTop3 = document.getElementById('my-spotrybefy');
const techClass = document.getElementsByClassName('tech')[0];
// const techDiv = document.getElementById('first-div');

//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// function addClassTech(element) {
//   element.classList.add("tech");
// }
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// input.addEventListener ("change", addFromTextInput)

// input.addEventListener ("change", addFromTextInput);

// function addFromTextInput() {
//   let teste = document.getElementById('first-div');
//   teste.innerText = input.value;
  
// }


  
// //  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// // redirecione para alguma página;
// // 1. Que tal redirecionar para seu portifólio?
// //  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// // a cor do mesmo;

myWebpage.addEventListener('dblclick', redirectFunction);

function redirectFunction () {
  window.open('http://google.com')
}

// myTop3.addEventListener ("mouseover", top3)

// function top3() {
//   myTop3.style.backgroundColor = "yellow";
// }
// // Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstDiv.addEventListener('dblclick', resetText);
// // Não precisa passar o parâmetro dentro do addEventListener. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'divUm'.