class ValidarCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    éSequência(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11)
        if(this.éSequência())return false;
        return 'Cheguei aqui.'
    }
}
let validacpf = new ValidarCPF('000.888.000.10');
//validacpf = new ValidarCPF('123.888.550.30');
console.log(validacpf.valida());