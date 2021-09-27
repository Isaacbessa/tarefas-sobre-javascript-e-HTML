const nome = 'rebeca'
const contatenacao = 'olá ' + nome + '!'
const template = `
    olá
    ${nome}!`
    console.log(contatenacao, template);
// expressoes...
console.log(`1 + 1 ${1+1}`);
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`);

//O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
