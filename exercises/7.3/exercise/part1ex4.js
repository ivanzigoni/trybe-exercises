const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

const expected1 = myFizzBuzz(15);
assert.strictEqual(expected1, 'fizzbuzz');


const expected2 = myFizzBuzz(6);
assert.strictEqual(expected2, 'fizz');


const expected3 = myFizzBuzz(25);
assert.strictEqual(expected3, 'buzz');


const expected4 = myFizzBuzz(7);
assert.strictEqual(expected4, 7);



const expected5 = myFizzBuzz('oi');
assert.strictEqual(expected5, false);