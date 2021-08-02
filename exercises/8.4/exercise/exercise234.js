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


// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//     },
//     releaseYear: 1991,
// };
function longestNamedBook(array) {
    const biggestName = array.reduce((ac, e) => {
        ac.push(e.name);
        return ac;
    }, []).sort((a, b) => {
        return b.length - a.length;
    })[0];

    return array.find(e => {
        return e.name === biggestName;
    })
}
//   assert.deepStrictEqual(longestNamedBook(books), expectedResult);








// const expectedResult = 43;
function averageAge(array) {
  return array.reduce((ac, e) => {
    return ac + (e.author.birthYear - e.releaseYear)
  }, 0) / array.length * -1;
}
// assert.strictEqual(averageAge(books), expectedResult);











// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
function reduceNames(array) {
    return array.reduce((ac, e, i) => {
        if (array.length - 1 === i) {
            return ac + e.author.name + '.';
        } else {
            return ac + e.author.name + ', '
        }
    }, '');
}
// assert.strictEqual(reduceNames(books), expectedResult);