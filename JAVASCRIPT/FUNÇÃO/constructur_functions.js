//Pascal case = começa com letra maiscula

function Celular(marcaCelular,tamanhoDatela,capacidadedeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhodaTela = tamanhoDatela,
    this.capacidadedeBateria = capacidadedeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação...');
    }
}
const celular = new Celular ('Asus', 5.5, 5000); // new celular seria o constructor, que vai construir as informações dentro de cada this
console.log(celular); // irá exibir todas as informações do celular