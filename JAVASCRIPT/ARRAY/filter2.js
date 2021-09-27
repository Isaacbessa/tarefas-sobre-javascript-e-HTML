Array.prototype.filter2 = function(callback) {
    
    const newArray = [] //criei uma nova array
    for (let i = 0; i < this.length; i++) { //i= index, a primeira posição do array é o 0
        if(callback(this[i], i, this)) { 
            newArray.push(this[i])  //push - diciona um ou mais elementos ao final de um array
        } //callback é uma função passada a outra função como argumento, 
        //que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))