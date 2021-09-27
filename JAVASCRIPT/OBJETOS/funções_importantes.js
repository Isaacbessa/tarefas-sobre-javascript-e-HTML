const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna as string dentro da propriedade pessoa
console.log(Object.values(pessoa)) // loga todos os valores(numbers) dentro da constante pessoa
console.log(Object.entries(pessoa)) // retorna tudo dos pares keys e values

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destin

Object.freeze(obj)
obj.c = 1234
console.log(obj)