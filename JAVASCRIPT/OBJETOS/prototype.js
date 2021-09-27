//O objeto protótipo 
//é um tipo especial de objeto enumerável ao qual propriedades adicionais podem ser anexadas a ele
//class Estudante {
    //constructor() {
    //    this.name = 'John';
     //   this.gender = 'M';
    //}
//}

//Estudante.prototype.age = 15;

//var studObj1 = new Estudante();
//alert(studObj1.age); //age é anexada à instância studObj1.

//var studObj2 = new Estudante();
//alert(studObj2.age); 
//a instância studObj2 não terá a propriedade age porque é definida apenas na instância studObj1.

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype);
console.log(studObj.prototype);
console.log(studObj.__proto__);

console.log(typeof Student.prototype); 
console.log(typeof studObj.__proto__); 

console.log(Student.prototype === studObj.__proto__ );


//A propriedade prototype 
//é um tipo especial de objeto enumerável que não pode ser iterado usando o loop for..in ou foreach.

//__proto__é o objeto real que é usado na cadeia de pesquisa para resolver métodos, etc.
 //prototypeé o objeto que é usado para construir __proto__quando você cria um objeto com new: