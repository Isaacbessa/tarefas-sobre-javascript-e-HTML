//O getter, com a sintaxe get 
//é associado a uma função que será chamada quando a propriedade em questão for acessada e solicitada de forma dinâmica.]
const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        //se
        if(valor > this._valor) {
             // this é feito para direcionar essas propriedades à própria classe em questão.
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)