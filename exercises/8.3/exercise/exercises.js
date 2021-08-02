const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:


const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(array) {
  return array.find(e => {
    return e.author.name.replace(/[^\d.-]/g, "") === '...';
  }).name;
}


assert.deepStrictEqual(authorWith3DotsOnName(books), expectedResult);

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks(array) {
//   const oldBooks = array.filter(e => {
//     return 2021 - e.releaseYear > 60;
//   }).map(e => {
//     return e.name;
//   })
//   return oldBooks;
// }

// assert.deepStrictEqual(oldBooks(books), expectedResult);


// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors(array) {
//   const authorsSorted = array.filter(e => {
//     return e.genre === 'Fantasia' || e.genre === 'Ficção Científica'; 
//   }).map(e => {
//     return e.author.name;
//   }).sort()
//   return authorsSorted;
// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(books), expectedResult);


// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered(array) {
//   const newerBooks = array.filter(e => {
//     return 2021 - e.releaseYear > 60; 
//   }).sort((a, b) => {
//     return a.releaseYear - b.releaseYear;
//   })
//   return newerBooks
// }

// assert.deepStrictEqual(oldBooksOrdered(books), expectedResult);


// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// function fantasyOrScienceFiction(array) {
//   return array.filter(e => {
//     return e.genre === 'Ficção Científica' || e.genre === 'Fantasia';
//   })
// }
// assert.deepStrictEqual(fantasyOrScienceFiction(books), expectedResult);


//   const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];
//   function nameAndAge(array) {
//     const authorsAgeName = array.map(e => {
//         let eachAuthor = {};
//         eachAuthor.age = e.releaseYear - e.author.birthYear;
//         eachAuthor.author = `${e.author.name}`;
//         return eachAuthor;
//     }).sort((a, b) => {
//         return a.age -b.age;
//     })
//     return authorsAgeName;
//   }
//   assert.deepStrictEqual(nameAndAge(books), expectedResult);


// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];
// function formatedBookNames(array) {
//     return array.map(e => {
//         return `${e.name} - ${e.genre} - ${e.author.name}`
//     })
// }
// assert.deepStrictEqual(formatedBookNames(books), expectedResult);