const sum = require('./sum.js');
const myRemove = require('./myremove.js');
const removeWoCopy = require('./removeWoCopy');
const fizzBuzz = require('./fizzbuzz.js');
const { obj1, obj2, obj3, obj5 } = require('./comparaObject.js');


describe('Soma uns trem', () => {

    test('Somar 4 + 5', () => {
        expect(sum(4, 5)).toEqual(9)
    });

    test('Somar 0 + 0', () => {
        expect(sum(0, 0)).toEqual(0)
    });

    test('Retorna erro quando parâmetro for diferente de number', () => {
        expect(() => { sum(0, '5') }).toThrow('parameters must be numbers')
    });

})

describe('Remove uns trem :D', () => {

    test('input ([1, 2, 3, 4], 3) retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('input ([1, 2, 3, 4], 3) retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('verifica se array passado não sofreu alterações', () => {
        const array = [1, 2, 3, 4];
        const arrLength = array.length;
        expect(myRemove(array, 3).length != arrLength).toEqual(true)
    });

    test('verifica se array retorna valor esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
})

describe('Remove without copy', () => {

    test('Verifica se retorna array esperado', () => {
        expect(removeWoCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Verifica se retorna array esperado', () => {
        expect(removeWoCopy(([1, 2, 3, 4], 3))).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifica se array alterou', () => {
        const array = [1, 2, 3, 4];
        removeWoCopy(array, 3);
        expect(array).toEqual([1, 2, 4]);
    });

    test('Verifica se função não quebra', () => {
        expect(removeWoCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

});

describe('Testando se o Fizz Buzza e se o Buzza Fizza :P', () => {

    test('Se divisíveis por 3 e 5 retornam fizzbuzz', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });

    test('Se divisíveis por 3 retornam fizz', () => {
        expect(fizzBuzz(9)).toBe('fizz');
    });

    test('Se divisíveis por 5 retornam buzz', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    });

    test('Se retorna próprio número caso não divida', () => {
        expect(fizzBuzz(8)).toBe(8);
    });

    test('Se retorna false caso parâmetro não seja número', () => {
        expect(fizzBuzz('8')).toBe(false);
    });
})

describe('Comparando objects', () => {

    test('testando o teste', () => {
        expect(obj5).toEqual(obj1);
    });

})
