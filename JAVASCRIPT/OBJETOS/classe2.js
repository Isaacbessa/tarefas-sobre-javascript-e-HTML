class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //extends é usada em uma class declarations ou class expressions para criar uma classe filha de outra classe.
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //é usada para acessar a classe pai de uma classe.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}
// a class filho vai puxar a classe pai, onde o sobrenome será silva
//primeiro é a class filho acessando o sonrenome, silva, depois puxa a class Pai, acessando a profissão professor
const filho = new Filho
console.log(filho)
