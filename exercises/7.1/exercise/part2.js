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

function substituindo (string) {
  return string.replace('x', 'teste');
  
}

console.log(substituindo(string))

