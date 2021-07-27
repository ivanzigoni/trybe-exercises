const assert = require('assert');
// escreva a função wordLengths aqui


function wordLengths(array) {
    let outputArray = [];

    for (let i = 0; i < array.length; i += 1) {
        outputArray.push(array[i].length);
    }

    return outputArray;
}





const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

