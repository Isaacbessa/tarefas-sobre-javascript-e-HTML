// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global' // global é a atribuição adiquirida dentro do x

function fora() {
    const x = 'Local'
    function dentro() { // o local físico onde a função foi declara é muito importante
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // irá logar Local pois a constante minhaFuncao é o local fisico que se encontra o x