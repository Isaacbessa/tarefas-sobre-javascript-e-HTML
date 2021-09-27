/* O método JSON.stringify() converte valores em javascript para uma String  JSON. 
Esses valores podem ser substituidos especificando a função replacer
ou incluindo somente as propriedades específicas,

*/

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

/*
O método JSON.parse() analisa uma string JSON, 
construindo o valor ou um objeto JavaScript descrito pela string. 
Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto resultante antes de ser retornada.
*/