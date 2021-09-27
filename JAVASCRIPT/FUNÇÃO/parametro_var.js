//arguments é um um objeto em que recebe todos os parâmetros que são passados pela função. 
//Com isso, quando você passa os parâmetros, 
//o for percorre todos os parâmetros de arguments e com isso, faz a soma.

function soma() {
    let soma = 0
    for (i in arguments) { //interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.
        soma += arguments[0]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(5.5, 2.2))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))