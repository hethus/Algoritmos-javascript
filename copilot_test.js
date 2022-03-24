const prompt = require("prompt-sync")();

// pegar um numero e vai dividir por um numero que o usuario digitar e ter duas casas decimais

let numero = +prompt("qual o numero? ");
let divisor = +prompt("qual o divisor? ");
let divisao = (numero / divisor).toFixed(2);

console.log(`o numero dividido por 13 é ${divisao}`);

//quero que mostre uma carinha de choro em um console.log

console.log("\u{1F622}");

//escrever um array com carinhas aleatorias em um for

let carinhas = ["\u{1F600}", "\u{1F601}", "\u{1F602}", "\u{1F603}", "\u{1F604}", "\u{1F605}", "\u{1F606}", "\u{1F607}", "\u{1F608}", "\u{1F609}", "\u{1F60A}", "\u{1F60B}", "\u{1F60C}", "\u{1F60D}", "\u{1F60E}", "\u{1F60F}", "\u{1F610}", "\u{1F611}", "\u{1F612}", "\u{1F613}", "\u{1F614}", "\u{1F615}", "\u{1F616}", "\u{1F617}", "\u{1F618}", "\u{1F619}", "\u{1F61A}", "\u{1F61B}", "\u{1F61C}", "\u{1F61D}", "\u{1F61E}", "\u{1F61F}", "\u{1F620}", "\u{1F621}", "\u{1F622}", "\u{1F623}", "\u{1F624}", "\u{1F625}", "\u{1F626}", "\u{1F627}", "\u{1F628}", "\u{1F629}", "\u{1F62A}", "\u{1F62B}", "\u{1F62C}", "\u{1F62D}", "\u{1F62E}", "\u{1F62F}", "\u{1F630}", "\u{1F631}", "\u{1F632}", "\u{1F633}", "\u{1F634}", "\u{1F635}", "\u{1F636}", "\u{1F637}", "\u{1F638}", "\u{1F639}" ];

for(let i = 0; i < carinhas.length; i++) {
    console.log(carinhas[i]);
}

// criar um array de numeros aleatorios sem repetir e separar em dois arrays par e impar

let numeros = [];
let numerosPar = [];
let numerosImpar = [];

while(numeros.length < 10) {
    let numero = Math.floor(Math.random() * 100);
    if(numeros.indexOf(numero) == -1) {
        numeros.push(numero);
    }
} 
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0) {
        numerosPar.push(numeros[i]);
    } else {
        numerosImpar.push(numeros[i]);
    }
}
console.log(numeros);
console.log(numerosPar);
console.log(numerosImpar);

// colocar uma carinha macaco no console.log

console.log("\u{1F435}");

// banco

let saldo = +prompt("qual o saldo? ");
let deposito = +prompt("qual o valor do deposito? ");
let saque = +prompt("qual o valor do saque? ");

if(deposito > 0) {
    saldo += deposito;
}
if(saque > 0) {
    saldo -= saque;
}else if(saque < 0) {
    console.log("valor invalido");
}
if(saldo < 0) {
    console.log("saldo insuficiente");
}else if(saldo > 0) {
    console.log("saldo disponivel");
}
console.log(saldo);
console.log("\u{1F435}");
