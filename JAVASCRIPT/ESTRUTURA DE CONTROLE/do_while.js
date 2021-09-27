let x = 10;
 
do {
    console.log(x); // Imprime o número 10;
    x++;            // Incrementa o valor de x
} while(x < 5);

//mesmo que a condição x < 5 não seja verdadeira, 
//o que está dentro do do while é executado pelo menos uma vez, 
//e só depois de executar uma vez é que ele verifica a condição que é falsa e saí do laço.