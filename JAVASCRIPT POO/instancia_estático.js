class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
//método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    //método estático
    static trocaPilha(){
        console.log('Ok, Vou trocar!');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume()
console.log(controle1);
ControleRemoto.trocaPilha() //só conseguimos acessar o static pela class
