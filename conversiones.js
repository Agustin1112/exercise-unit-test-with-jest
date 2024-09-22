
const euroToDollarRate = 1.2; // 1 euro = 1.2 dólares
const dollarToYenRate = 110; // 1 dólar = 110 yenes
const yenToPoundRate = 0.0065; // 1 yen = 0.0065 libras

// Convierto de Euro a Dólar
function fromEuroToDollar(euroAmount) {
    return euroAmount * euroToDollarRate;
}

// Convierto de Dólar a Yen
function fromDollarToYen(dollarAmount) {
    return dollarAmount * dollarToYenRate;
}

// Convierto de Yen a Libra Esterlina
function fromYanToPound(yenAmount) {
    return yenAmount * yenToPoundRate;
}

// Exporto las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };
