const exercise4 = require('./exercise4.js');
let {
    upperCase,
    firstLetter,
    concatena
} = exercise4;

jest.mock('./exercise4')

// 4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

describe('exercício 4', () => {
    it('se tá rolano 4', () => {
        upperCase = jest.fn()
        .mockImplementation((str) => str.toLowerCase());

        expect(upperCase('OI')).toBe('oi');
    });

    it('se tá rolano 4 pt 2', () => {
        firstLetter = jest.fn()
        .mockImplementation((str) => str[str.length -1]);

        expect(firstLetter('oi')).toBe('i');
    });

    it('se tá rolano 4 pt 3', () => {
        concatena = jest.fn()
        .mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

        expect(concatena('oi', 'turu', 'pem')).toBe('oiturupem');
    });
});

