function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`) // altura * altura tem que ser maior que 20 pra logar = Valor acima do permitido 25m2
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))