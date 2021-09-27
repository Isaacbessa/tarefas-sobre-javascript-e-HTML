const peso1 = 1.1 // valor quebrado dá false
const peso2 = Number('2.0') // valor inteiro dá true

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 * avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(5)); //toFixed = sao as casas decimais acrescentadas no resultado;
console.log(media.toString()) //retorna o valor original
console.log(typeof media);
console.log(typeof Number);