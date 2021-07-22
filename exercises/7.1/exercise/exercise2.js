const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort

const sorted = oddsAndEvens.sort((a, b) => a - b);

// [13, 3, 4, 10, 7, 2];
// [3, 13, 4, 10, 7, 2];
// [3, 4, 13, 10, 7, 2];
// [3, 4, 10, 13, 7, 2];
// [3, 4, 10, 7, 13, 2];
// [3, 4, 10, 7, 2, 13];
// [3, 4, 10, 7, 2, 13]; ... so on

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

console.log(`Os números ${sorted} se encontram ordenados`);

