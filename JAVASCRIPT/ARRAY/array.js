// utilizado para armazenar uma coleção de elementos em uma única variável
console.log(typeof Array, typeof new Array, typeof [])
//typeof significa que ele ler o tipo, se é undefined, number, object, string

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
// new array = constructor

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined pois não tem a posição 3

aprovados[3] = 'Paulo' 
aprovados.push('Abia') //adiciona um ou mais elementos ao final de um array
console.log(aprovados.length) // tamanho da array, pois adicionei paulo e abia, de uma forma simples e outra usando o push

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena os elementos do próprio array e retorna o array.
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
// metodo splice altera o conteúdo de uma lista 
//adicionando novos elementos enquanto remove elementos antigos.

