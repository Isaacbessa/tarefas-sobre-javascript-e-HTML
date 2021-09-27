const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //A this palavra-chave JavaScript se refere ao objeto ao qual pertence.
    }
}

pessoa.falar() // a função chamada seria FALAR dentro da constante pessoa, onde logaria o this.saudação que é bom dia, uma função chamando outra

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()