function Pessoa() { //{} = se cria o corpo da função
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)         //loop infinito, comparando com o if
}

new Pessoa