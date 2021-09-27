const nome = "Isaac";
const sobrenome = "Maciel";
const idade = 20;
const peso = 100;
const alturaemM = 1.81;
let indiceMassaCorporal; // peso  (altura * altura);
let anoNascimento; 2000 

indiceMassaCorporal = peso / (alturaemM*alturaemM);
anoNascimento = 2000 - idade
//templates strings
console.log(nome, sobrenome, "tem" , idade, "anos", "pesa", peso,"kg");
console.log("tem", alturaemM, "de altura e seu IMC é de", indiceMassaCorporal);
console.log(nome, "nasceu em", anoNascimento, ".")
