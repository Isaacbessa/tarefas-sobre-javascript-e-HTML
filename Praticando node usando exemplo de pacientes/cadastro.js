const dados1 = require ('./dados1')
const dados2 = require ('./dados2')
const saudacoes = require ('./saudacoes')

let nomeDoCliente = ' Isaac Maciel';

console.log(saudacoes.bomDia());
console.log(saudacoes.boaTarde());
console.log(saudacoes.boaNoite());
console.log(dados1.dados(nomeDoCliente));
console.log(dados2.cria(nomeDoCliente));