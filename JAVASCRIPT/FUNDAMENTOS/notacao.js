console.log(Math.ceil(6.1)); //A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".


const obj1 = {}
obj1.nome = 'Bola';
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec...');
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj ('mesa')

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()