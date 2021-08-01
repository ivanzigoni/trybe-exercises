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

const expectedResult = false;

function authorUnique() {
  let boo = true;
for (let i = 0; i < books.length; i += 1) {
  for (let k = i + 1; k < books.length; k += 1) {
    if (books[i].author.birthYear === books[k].author.birthYear) {
      boo = false;
    }
  }
}
return boo
}

// function authorUnique() {
//   let boo = true;
//   const sorted = books.sort((a, b) => a.author.birthYear - b.author.birthYear)
//   const check = sorted.sort((a, b) => {
//     if (a.author.birthYear === b.author.birthYear) {
//       boo = false;
//     }
//   })
//   return boo;
// }

// function authorUnique() {
//   let boo = true;
//   const sorted = books.sort((a, b) => a.author.birthYear - b.author.birthYear).sort((a, b) => {
//     if (a.author.birthYear === b.author.birthYear) {
//       boo = false;
//     }
//   })
//   return boo;
// } also works but worse to read

assert.strictEqual(authorUnique(), expectedResult);

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   let boolean;

//   books.forEach(element => {
//     if (element.releaseYear > 1980 && element.releaseYear < 1989) {
//       boolean = true;
//     }
//   })

//   return boolean;
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   let boolean;
//   books.some(element => {
//     boolean = element.author.birthYear > 1901});
//     return boolean
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   }
// ];

// function booksOrderedByReleaseYearDesc() {

//   const sorted = books.sort((a, b) => {
//     return b.releaseYear - a.releaseYear;
//   })

//   return sorted;
// }
// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

  // const expectedResult = {
  //   author: {
  //     birthYear: 1948,
  //     name: 'George R. R. Martin',
  //   },
  //   genre: 'Fantasia',
  //   id: 1,
  //   name: 'As Crônicas de Gelo e Fogo',
  //   releaseYear: 1991,
  // };

  // function getNamedBook() {
  //   return books.find(element => element.name.length === 26)
  // }

  // assert.deepStrictEqual(getNamedBook(), expectedResult);

// function smallerName() {
//   let nameBook;
//   let nameLength = 1000000;
//   books.forEach((element) => {
//     if (element.name.length < nameLength) {
//       nameLength = element.name.length;
//       nameBook = element.name;
//     }
//   })
//   return nameBook;
// }

// assert.strictEqual(smallerName(), 'Duna');

// function authorBornIn1947() {
//   let author = '';
//   books.find(element => {
//     if (element.author.birthYear === 1947) {
//       author = element.author.name;
//     }
//   })
//   return author;
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');

