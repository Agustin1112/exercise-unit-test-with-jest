const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./conversiones');

test('Convierte de Euro a Dólar', () => {
    expect(fromEuroToDollar(3)).toBe(3.6);
});

test('Convierte de Dólar a Yen', () => {
    expect(fromDollarToYen(5)).toBe(550);
});

test('Convierte de Yen a Libra Esterlina', () => {
    expect(fromYenToPound(1000)).toBe(6.5);
});

