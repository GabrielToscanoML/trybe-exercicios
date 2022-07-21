const custo = 15;
const valor = 30;
let valorCustoTotal;
let lucro;
let impostoSobreOCusto = 20;

valorCustoTotal = custo + (impostoSobreOCusto/100);

lucro = (valor-valorCustoTotal)*1000;

console.log(`Valor total de lucro eh: ${lucro}`);