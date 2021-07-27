const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const expected1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected1, [1, 2, 4]);



const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.notDeepStrictEqual(expected2, [1, 2, 3, 4]);



const expected3 = myRemoveWithoutCopy([1, 2, 3, 4], 3);

// assert.deepStrictEqual(expected3, [1, 2, 3, 4], 'sofreu alteração');


const expected4 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected4, [1, 2, 3, 4]);