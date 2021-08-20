const exercise = require('./exercise1');

// 1 Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.




describe('exercício 1', () => {
    it('se tá rolano', () => {
        exercise.randomNumber = jest.fn()
        .mockReturnValue(10);

        const result = exercise.randomNumber();

        expect(exercise.randomNumber).toHaveBeenCalled();
        expect(result).toBe(10);
        expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
    })

})

// 2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

describe('exercício 2', () => {
    it('se tá rolano pt 2', () => {
        exercise.randomNumber = jest.fn()
        .mockImplementation((a, b) => a / b);

        expect(exercise.randomNumber(4, 2)).toBe(2);
    })
})

// 3 Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('exercício 3', () => {
    it('se tá rolano pt 3', () => {
        const mockRandom = jest.spyOn(exercise, 'randomNumber')
        .mockImplementation((a, b, c) => a * b * c);

        expect(mockRandom(1, 2, 1)).toBe(2);

        exercise.randomNumber.mockRestore();

        mockRandom
        .mockImplementation((a) => 2 * a);

        expect(mockRandom(2)).toBe(4);

    })
})

// 4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.


describe('exercício 4', () => {
    it ('se tá rolano pt 4' () => {
        
    })
});