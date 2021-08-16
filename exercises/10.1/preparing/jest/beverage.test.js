const removeBebida = require('./beverage.js');

describe('Remove sabor de bebida', () => {
    it('Remover água', () => {

        const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha']
        expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'agua'));

    });

    // it('Remover garapa', () => {
    //     expect(removeBebida()).toEqual();
    // })
    // it('Remover groselha caso exista', () => {
    //     expect(removeBebida()).toEqual();
    // })
})