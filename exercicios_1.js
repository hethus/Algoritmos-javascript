const prompt = require("prompt-sync")();

// 1-

// const numero = +prompt('qual o numero? ');
// const menos = numero - 1;
// const mais = numero + 1;

// console.log(`o sua casa é ${numero}, seus vizinhos são ${menos} e ${mais}`);

// 2-

// const conta = +prompt('valor da conta: ');
// const pessoas = +prompt('quantas pessoas? ');

// const resultado = (conta / pessoas).toFixed(2);

// console.log(`cada um ira pagar ${resultado} Reais! ;)`);

// 3-

// const preco = +prompt('valor do produto: ');
// const aVista = (preco * 0.9).toFixed(2);
// const parcelado = (preco / 3).toFixed(2);

// console.log();
// console.log(`as opções de pagamento na loja são:
//     1- a vista com 10% de desconto
//     2- parcelado em 3x no cartão de credito
// `);
// console.log();
// console.log(`a sua compra de ${preco} Reais custará:
//     1- a vista: ${aVista} Reais
//     2- parcelado em 3x: ${parcelado} Reais
// `);

// 4-

const notaUm = +prompt('primeira nota: ');
const notaDois = +prompt('segunda nota: ');
const calculo = ((notaUm + notaDois) / 2).toFixed(1);

console.log();
console.log(`A media final do aluno foi: ${calculo}`);