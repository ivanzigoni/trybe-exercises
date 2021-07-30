// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const teste = numbers.find(element => element % 2 === 0);

// console.log(teste);

// const numbers = [19, 21, 3, 45, 22, 15];

// const firstDivisible = numbers.find(element => element % 5 === 0 && element % 3 === 0);

// console.log(firstDivisible)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const fiveLetterName = names.find(element => element.length === 5);

// console.log(fiveLetterName);

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
const musica = musicas.find(element => element.id === '31031685')
  
  console.log(musica)

