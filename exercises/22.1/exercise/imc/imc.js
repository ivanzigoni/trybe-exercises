const readline = require('readline-sync');

const peso = readline.questionInt('Type your weight ');
const altura = readline.questionInt('Type your height ');

const imcCalc = (peso, altura) => { console.log('IMC: ', (peso * altura) / 2) };

module.exports = {imcCalc, peso, altura};