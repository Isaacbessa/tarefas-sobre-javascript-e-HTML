//var teste = 5;
//console.log(this.teste);
//console.log(teste);

let pessoa = {
    nome: 'Isaac',
    idade: 29,
    dizerNome: function(){
        console.log('o meu nome é ' + this.nome);
    },
    aniversario: function(){
        this.idade += 1; // o this acessa o conteudo dentro da variavel, do objeto específico
    }
};
pessoa.dizerNome();
console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario(); //cada vez que eu chamar a função acrescente 1 ano a mais na idade
pessoa.aniversario()

console.log(pessoa.idade); //idade final*/
