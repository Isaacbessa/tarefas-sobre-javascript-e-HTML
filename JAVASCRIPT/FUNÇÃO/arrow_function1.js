//ARROw é uma nova forma de criar funçãos no javascript, mais curta
//Se nossa função possuir apenas um comando return, 
//não precisamos informá-lo, mas apenas o valor que queremos retornar.
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI)) // multriplica o 2 x o valor do PI = 3.14159

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())