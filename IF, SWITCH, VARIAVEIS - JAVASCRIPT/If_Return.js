function calculadarImc (altura, peso) {
    let resultadoImc = peso/(altura * altura)
if(resultadoImc >= 30){
    return 'obesidade'
}
if(resultadoImc >= 24 && resultadoImc < 30){
    return 'sobrepeso'
}
if(resultadoImc >= 18 && resultadoImc < 24){
    return 'normal'
}
}
var imcIsaac = calculadarImc(1.81, 90)
console.log(imcIsaac);