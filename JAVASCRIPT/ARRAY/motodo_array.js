const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa é removido
console.log(pilotos)

pilotos.push('Verstappen') // adiciona
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição da listta
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array da posição 0 até o 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)