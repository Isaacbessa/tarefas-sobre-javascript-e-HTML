class Professor {
    constructor(nome, sobrenome, curso){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.curso = curso
    }
    saudacao(){
        console.log('Bom dia, ' + this.nome + ' ' + this.sobrenome + ', Qual seu curso? ' + this.curso)
    }
}

let joao = new Professor('João', 'Souza', 'Lógica de programação')
joao.saudacao()