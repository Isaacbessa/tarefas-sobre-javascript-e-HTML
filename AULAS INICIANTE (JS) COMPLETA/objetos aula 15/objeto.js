const pessoa1 = {
    nome: "Isaac",
    sobrenome: "Maciel",
    idade: 20,
fala() {        
    console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();