for (var i = 10; i > 0; i--){
    console.log(i);
if(i === 5){           //O operador === ele compara o valor e o tipo
    break;            //if  é uma estrutura condicional que executa a afirmação, dentro do bloco, 
                     //se determinada condição for verdadeira
}
} // quando o if faz a verificação e chega na repetição 5, o break executa e loga o 'deu o break'
console.log('Deu o break'); 

