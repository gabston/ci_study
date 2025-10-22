const soma = require('../soma')

test('Soma 1 + 2, o resultado tem que ser 3', () => {
    expect(soma(1, 2)).toBe(3)
})