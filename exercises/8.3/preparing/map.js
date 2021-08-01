const array = [1, 2, 3, 4, 5];
const array2 = array.map(e => e * 2);


const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

const personFullName = persons.map(e => `${e.firstName} ${e.lastName}`);

const numbers = [1, 2, 3, 4, -5];

const negative = numbers.map(e => (e > 0) ? e * (-1) : e)

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const priced = products.map((e, i) => {
    let itemAndPrice = {}
    itemAndPrice[`${e}`] = prices[i]
    return itemAndPrice;
});

console.log(priced);

