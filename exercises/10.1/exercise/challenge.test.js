const {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
} = require('./challenges.js');


describe('Testando encode e decode', () => {

    test('Typeof === function', () => {
        expect(typeof encode && typeof decode).toBe('function');
    });

    test('Encode vogais para números', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    test('Decode números para vogais', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    test('Encode consoantes continuam sendo letras', () => {
        expect(encode('f')).toBe('f');
    });

    test('Decode números continuam números', () => {
        expect(decode('9')).toBe('9');
    });

    test('String length do input === do output', () => {
        expect(decode('fora bolsonaro').length).toBe(14)
    });
});

