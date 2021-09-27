function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa("Isaac", "Maciel", 20);
const pessoa2 = criaPessoa("Maria", "Bessa", 55);
const pessoa3 = criaPessoa("Pedro", "Viana", 17);
const pessoa4 = criaPessoa("Rogerio", "Pereira", 57);
const pessoa5 = criaPessoa("Lucas", "Silva", 30);
console.log(pessoa1.nome, pessoa2.nome)

