function ContaPoupanca() { 
   
    this.saldo = 0; this.deposita = function(valor) { this.saldo += valor; };
//this = estamos querendo acessar a propriedade de um objeto anterior
    this.atualiza = function(indice) { this.saldo += this.saldo * indice; }; }

var contaPoupanca = new ContaPoupanca();
 contaPoupanca.deposita(1000); 
 contaPoupanca.saldo; //1000 
 contaPoupanca.atualiza(0.05); 
 contaPoupanca.saldo; //1050

 console.log(contaPoupanca.saldo);