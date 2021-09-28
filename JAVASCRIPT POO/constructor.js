class Pessoa{
    constructor(nome, cpf, nascimento){
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
        console.log('constructor executado');
    }
}
const p1 = new Pessoa('Bruno', '999-003-999-21', '01/10/2000')
console.log(p1.nome);
console.log(p1.cpf);
console.log(p1.nascimento);