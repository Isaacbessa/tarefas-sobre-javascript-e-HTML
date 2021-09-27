//*
//PRIMITIVOS = strings, number,     boolean,    underfined,             null
//             texto  / números  / true x false / sem valor na variável/ ausência no valor do código
// bignint, symbol
// 
///let nome = "Isaac"
//nome[0] = "R";
//console.log(nome[0],nome);
    //let a = "A";
    //let b = a; // copiando
    //console.log(a,b);
    //a = "outra coisa";
    //console.log(a, b);

    // dados de referência (mutável) - array, object, function
    //let a =[1, 2, 3];
   // let b = [...a];
    //let c = b;
    //console.log(a, b);

    //a.push(4);
   // console.log(a, b);

   // b.pop();
    //console.log(b)

    const a = {
    nome: "Isaac",
    sobrenome: "Maciel"

    };
    const b = a;
    a.nome = "joão";
    console.log(b);