const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./conversiones');

test('Convierte de Euro a Dólar', () => {
    expect(fromEuroToDollar(3)).toBeCloseTo(3.6, 5);
});

test('Convierte de Dólar a Yen', () => {
    expect(fromDollarToYen(5)).toBe(550);
});

test('Convierte de Yen a Libra Esterlina', () => {
    expect(fromYenToPound(1000)).toBe(6.5);
});

