const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
    let numOfA = 0;

    let nameString = array.reduce((ac, e) => {
        let name = e.toLowerCase();
        return ac + name;
    }, '');

    for (let i in nameString) {
        if (nameString[i] === 'a') {
            numOfA += 1;
        };
    }

    return numOfA;
}


assert.deepStrictEqual(containsA(names), 20);

