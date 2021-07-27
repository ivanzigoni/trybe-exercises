const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const expected = myRemove([1, 2, 3, 4], 3);

//funciona V
assert.deepStrictEqual(expected, [1, 2, 4]);

//não funciona V
// assert.strictEqual(expected, [1, 2, 4]);


const expected1 = myRemove([1, 2, 3, 4], 3);

assert.notDeepStrictEqual(expected1, [1, 2, 3, 4]);






const expected2 = myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected2, [1, 2, 3, 4]);











// array1 = [1, 2, 4];
// array2 = [1, 2, 4];

// if (array1 === array2) {
//     console.log('array1 = 2')
// }

// if (array1[0] === array2[0]) {
//     console.log('index igual')
// }

// const object1 = {
//     a: 1,
//     b: 2
// };

// const object2 = {
//     a: 1,
//     b: 2
// };


// if (object1 === object2) {
//     console.log('object1 = 2')
// }

// if (object1.a === object2.a) {
//     console.log('object index')
// }

// const number1 = 1;
// const number2 = 1;

// const string1 = 'oi';
// const string2 = 'oi';

// if (number1 === number2) {
//     console.log('oi');
// }

// if (string1 === string2) {
//     console.log('oidnv');
// }


