// ap faz parte do conjunto de métodos disponíveis na linguagem
// para a manipulação de objetos do tipo array. 
// Ele funciona como uma estrutura de repetição,
// pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2 // 2 * o array nums
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) 
console.log(resultado)
// 1 do array + 10 = 11 x triplo = 33
// e daí emdiante 