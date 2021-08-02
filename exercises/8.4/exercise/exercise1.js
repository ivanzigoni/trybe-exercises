const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
    return array.reduce((ac, e) => {
        e.reduce((acc, el) => {
            ac.push(el)
            return el;
        }, '')
        return ac;
    }, [])
}


// console.log(flatten(arrays))

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);