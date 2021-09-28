//os setters são utilizados para definirem valores para uma propriedade específica.

class Aluno {
    constructor(nome, curso, semestre){
        this.nome = nome,
        this.curso = curso,
        this.semestre = semestre
    }
    set nomeAluno(nomeAluno) {
        this.nome = nomeAluno
    }
}

let lucas = new Aluno('', 'Engenharia', 5)
lucas.nomeAluno = 'Lucas'
console.log(lucas.nome) //Lucas