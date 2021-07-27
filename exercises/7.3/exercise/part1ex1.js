const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expect = sum(4, 5);
assert.strictEqual(expect, 9, 'what');

const expect1 = sum(0, 0);
assert.strictEqual(expect1, 0, 'what');

const expect2 = sum("5", 0);
assert.strictEqual(expect2, 5, 'lol');
