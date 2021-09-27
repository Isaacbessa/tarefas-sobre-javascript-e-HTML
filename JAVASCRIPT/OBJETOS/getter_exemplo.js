class Curso {
    constructor(materia, professor, duracao){
        this.materia = materia, // Programação orientada a objetos
        this.professor = professor, //Rafaella
        this.duracao = duracao // 1 semestre
    }
    get prof() {
        return this.materia
    }
}

let poo = new Curso('Programação orientada a objetos', 'Rafaella', '1 semestre')
console.log(poo.materia) //Rafaella