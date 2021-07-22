// Crie uma função que receba um número e retorne seu fatorial.

// const num = 5;
// let result = 1;

// function calculating (num) {
//     for (let i = 1; i <= num; i += 1) {
//         result = result * [i];
//     }
// }

// calculating(num);

// console.log(result)

// Crie uma função que receba uma frase e retorne qual a maior palavra.

// const frase = 'qual é a maior palavra dasdasdasdsadsa desta frase';

// function largerWordCounter(frase) {
//   let splittedStringArray = frase.split(' ')
//   let largerWordLength = 0;
//   let largerWord;

//   for (let i = 0; i < splittedStringArray.length; i += 1) {
//     if (splittedStringArray[i].length > largerWordLength) {
//       largerWordLength = splittedStringArray[i].length;
//       largerWord = splittedStringArray[i];
//     }
//   }

//   return largerWord;

// }

// console.log(largerWordCounter(frase))

//Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

const string = "aseks x sekok";

function substituindo(string) {
  return string.replace('x', 'teste');

}

substituindo(string)

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const array = ['skilla', 'skillc', 'skilld', 'skille', 'skillb'];

function skills() {
  const myString = substituindo(string);
  const sortedArray = array.sort();
  let teste = `${myString}: `;
  for (let i = 0; i < sortedArray.length; i += 1) {
    teste += `
${sortedArray[i]}`
  }
  return teste;
}

console.log(skills())

