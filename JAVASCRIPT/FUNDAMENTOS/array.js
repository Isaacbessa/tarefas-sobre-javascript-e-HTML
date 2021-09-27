const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
//O método pop() remove o último elemento de um array e retorna aquele elemento.
//A propriedade length de um objeto String contém o comprimento da string. 
//length é uma propriedade read-only (somente leitura) de instâncias de string.