// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
        //O método Object.freeze() congela um objeto: 
        //isto é, impede que novas propriedades sejam adicionadas a ele
const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)