const imprimirResultado = function(nota){
    if(nota >= 7){ // if = se for verdadeiro 
        console.log("Aprovado") //if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira
    } else { //else = se não for verdadeiro executa o else
        console.log("Reprovado") //Se for falsa, executa as afirmações dentro de else.
    }
}
imprimirResultado(10)
imprimirResultado(4)