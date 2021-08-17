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

const {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
} = require('./challenges2.js')

const searchEmployee = require('./exerciseBonus.js');


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

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
        expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
        expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
        expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
            {
                tech: 'CSS',
                name: 'Lucas'
            },
            {
                tech: 'HTML',
                name: 'Lucas'
            },
            {
                tech: 'JavaScript',
                name: 'Lucas'
            },
            {
                tech: 'Jest',
                name: 'Lucas'
            },
            {
                tech: 'React',
                name: 'Lucas'
            }
        ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], 'Lucas')).toBe('Vazio!');
    });
});


describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
        expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
        expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
        expect(hydrate('1 cerveja')).toBe('1 copo de água');
        expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
        expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
        expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
        expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
});

describe('Testando exercício bônus', () => {
    test('Se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    })
})