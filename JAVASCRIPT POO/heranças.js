class Conta {
    constructor() {
        this.saldo = 0;
        this.deposita = function (valor) {
            this.saldo += valor;
        };
    }
}

let contaCorrente = new Conta();
contaCorrente.deposita(1000);
contaCorrente.saldo;
console.log(contaCorrente.saldo);
