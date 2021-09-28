class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`$(this.nome) está falando`);
    }
}
const p1 = new Pessoa ("Isaac", "Maciel")
const p2 = new Pessoa ("Lucas", "Maciel")
const p3 = new Pessoa ("Jp", "Maciel")
const p4 = new Pessoa ("Mattheus", "Maciel")
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);