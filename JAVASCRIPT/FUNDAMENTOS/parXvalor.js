const saudacao = 'Opa' // contexto léxico 1, contexto léxico é o escopo no qual a declaração da variável foi realizada

function exec() {
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}
// objetos são grupos aninhados de pares nome e valor
const cliente = {
    nome: 'Isaac',
    idade: 20,
    peso: 90,
    endereço: {
        logradouro : 'calcadao e vinte e sete',
        numero: 70
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);
