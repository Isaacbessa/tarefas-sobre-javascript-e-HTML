let contador = 1
while(contador <= 10){
    console.log(`contador ${contador}`);
    contador ++
}

for(let i = 1; i <=10; i++) { // for ([inicialização]; [comparação]; [incremento ++ ou decremento -- ])
    console.log(`i = ${i}`); // a repetição irá verificar se o i = 1(contador) é verdadeiro, prox passo é a comparação, se for verdadeiro passa pro incremento ++ 
}
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i> notas.length; i++){
    console.log(`notas = ${notas[i]}`);
}