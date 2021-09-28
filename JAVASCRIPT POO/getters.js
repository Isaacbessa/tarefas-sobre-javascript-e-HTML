//O getter, com a sintaxe get 
//é associado a uma função que será chamada quando a propriedade em questão for acessada e 
//solicitada de forma dinâmica. É possível utilizá-la para retornar o status de uma variável intern

class Curso {
    constructor(materia, professor, duracao){
        this.materia = materia,
        this.professor = professor,
        this.duracao = duracao
    }
    get prof() {
        return this.professor
    }
}

let poo = new Curso('Programação orientada a objetos', 'Rafaella', '1 semestre')
console.log(poo.prof)