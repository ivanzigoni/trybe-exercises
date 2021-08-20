let { randomRgbColor, somar, subtrair, multiplicar } = require('./preparing');
const dividir = require('./preparing.js');


// describe('testando rgb color mock', () => {
// 	randomRgbColor = jest.fn()
// 	randomRgbColor.mockReturnValue("rgb(255, 255, 255)")
// 	randomRgbColor();

// 	test("se já foi chamada", () => {
// 		expect(randomRgbColor).toHaveBeenCalled();
// 	});

// 	test('se está retornando valor', () => {
// 		expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
// 	});
// })

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

describe('função dividir', () => {
	it('Faça o mock da funcão dividir e teste sua chamada.', () => {
		// const mockDividir = jest.spyOn(dividir, 'dividir');
		dividir.dividir = jest.fn()
			.mockReturnValue(15)
			.mockReturnValueOnce(2)
			.mockReturnValueOnce(5);

		// expect(mockDividir(30213213, 2)).toBe(2);
		// expect(mockDividir).toHaveBeenCalledTimes(1);
		// expect(mockDividir).toHaveBeenCalledWith(30213213, 2);
		// expect(mockDividir(10312321, 2)).toBe(5);
		// expect(mockDividir).toHaveBeenCalledTimes(2);
		// expect(mockDividir).toHaveBeenCalledWith(10312321, 2);
		// expect(mockDividir(3021312321, 2)).toBe(15);
		// expect(mockDividir).toHaveBeenCalledTimes(3);
		// expect(mockDividir).toHaveBeenCalledWith(3021312321, 2);
		expect(dividir.dividir(30213213, 2)).toBe(2);
		expect(dividir.dividir).toHaveBeenCalledTimes(1);
		expect(dividir.dividir).toHaveBeenCalledWith(30213213, 2);
		expect(dividir.dividir(10312321, 2)).toBe(5);
		expect(dividir.dividir).toHaveBeenCalledTimes(2);
		expect(dividir.dividir).toHaveBeenCalledWith(10312321, 2);
		expect(dividir.dividir(3021312321, 2)).toBe(15);
		expect(dividir.dividir).toHaveBeenCalledTimes(3);
		expect(dividir.dividir).toHaveBeenCalledWith(3021312321, 2);

	})
})

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

describe('função subtrair', () => {
	it('Faça o mock da funcão dividir e teste sua chamada.', () => {
		const mockSub = jest.spyOn(dividir, 'subtrair')
			.mockImplementation((a, b) => a - b);

		mockSub.mockReturnValue(20);

		expect(mockSub(1, 2)).toBe(20);
		expect(mockSub).toHaveBeenCalled();

		dividir.subtrair.mockRestore();

		expect(dividir.subtrair(2, 1)).toBe(1);

	})
})
