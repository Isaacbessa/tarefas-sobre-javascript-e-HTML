
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
// soma1( 3 ), os valores serão a = 3 , b = 1 , c = 1 ( b e c receberam 1 como padrão )
// e como a funcao soma todos os valores 3 + 1 + 1 o seu retorno será  5.
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //!== Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
    b = 1 in arguments ? b : 1 // a e b : serão ocupado pelo 1 
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))