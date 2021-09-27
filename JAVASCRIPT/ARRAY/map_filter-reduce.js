//     MAP
const numero = [2, 3, 6, 5, 10];
let novoArrayNumeros = [];

for(let i = 0; i < numero.length; i++){
    novoArrayNumeros.push(numero[i] * 2)
    //console.log(numero);
    //console.log(novoArrayNumeros);
}
//map é uma função que ela espera que você passe uma função de callback
//calback manipula cada valor do array
// o map interage o array de um a um, aplicando a sua função a cada valor
const novoArraymap = numero.map(function(numero){
    //console.log(numero);
   return numero * 2 
});
//console.log('novoArrayMap', novoArraymap);

const  arrayMapArrow = numero.map(numero => numero * 2);
//console.log('ArrayMapArrow', arrayMapArrow);

const nomes = ['Isaac', 'Nicolas', 'Maciel', 'Teste', ' Fulano']
const nomesMinusculos = nomes.map(function(nome){
    return nome.toLocaleLowerCase()

})
//console.log(nomes);
//console.log(nomesMinusculos);

// FILTER

//filter retorna um valor boolean, true ou false, serve para filtrar a array
// true ele filtra um valor no array
// false ele não filtra nenhum valor no array

let mult2 = [];
for(let i = 0; i < numero.length; i++){
    if (numero[i] % 2 === 0 ){
        mult2.push(numero[i]) // se essa verificação for verdadeira vou acrescentar no array
    } // operador === ele compara o valor e o tipo, 
    //então só vai ser true se for exatamente igual (valor e tipo).
}
//console.log(mult2); // resultado será numeros multiplos de 2
const numerosFiltrados = numero.filter(function(numero)
{
    if(numero % 2 === 0)
        return true;
    
    else {
            return false;
        }
})
//console.log('numerosFiltrados', numerosFiltrados);

// operador === ele compara o valor e o tipo, 
//então só vai ser true se for exatamente igual (valor e tipo).
const arrayMapFilter = numero
.filter(numero => numero % 2 === 0)
.map(numero => numero * 2);

//console.log(arrayMapFilter);

//     REDUCE
// O REDUCE INTERA SOBE O ARRAY, IGUAL O MAP E FILTER
//a diferença é que ele retorna uma string, objeto, array, number

let soma = 0;
for(let i = 0; i < numero.length; i++){
    soma = soma + numero[i]
    // a primeira verificação soma será 0 + 2, que é a primeira posição do array;
    // a segunda verifação a soma será dois + 3, 3 está no array
}
//console.log(soma);

const somaReduce = numero.reduce(function(valorAcumulador, valorArray) {
    return valorAcumulador + valorArray;
            // [2, 3, 6, 5, 10];
            // o reduce vai retornar o valorAcumulador + valorArry
            //valorAcumulador vai ser a soma, vai ficar recebendo os valores
            // valorArray terá a cada repetição um novo valor que está no array
            // ex: valorAcumulador é 2 (na primeira repetição)
            // na segunda repetição 2 + 3, 3 é o valorArry então será 5
            // valorAcumulaor é 5 + 6 do novoArray, assim emdiante
}, 0 )
//console.log(somaReduce);

const pessoas = [
    {
        nome: 'Ayrton',
        idade: 27
      },
      {
        nome: 'João',
        idade: 14
      },
      {
        nome: 'Maria',
        idade: 23
      },
      {
        nome: 'Joana',
        idade: 21
      },
      {
        nome: 'Lucas',
        idade: 32
      },
      {
        nome: 'Mateus',
        idade: 15
      },
      {
        nome: 'Isa',
        idade: 23
      },
      {
        nome: 'Luiza',
        idade: 17
      }
]
// objeto com chaves maiores e menores com array vazias
pessoas.reduce(function(valorAcumulador, valorArray) {
    console.log(valorArray.idade);
}, {maiores: [], menores: []})