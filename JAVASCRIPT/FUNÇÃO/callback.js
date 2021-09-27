//callback é um tipo de função que só é executada após o processamento de outra função.
const fabricantes = ["Mercedes", "Audi", "BMW"]

// valor da função é imprimir, dentro das chaves{ fica os parametros}
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // $ é o template string
}
//O método forEach() executa uma dada função em cada elemento de um array.
fabricantes.forEach(imprimir) // imprimi o nome mais o indice
fabricantes.forEach(fabricante => console.log(fabricante))