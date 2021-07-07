function encontrarValorDoProduto(produto) {
        switch(produto){
            case 'sabao':
                return 2.0
            case 'refrigerante' :
                return 7.0
            case 'suco de manga' :
                return 1.50
            default:
                return 0;
                
        }
} 

var precoDoRefrigerante = encontrarValorDoProduto ('refrigerante')
    console.log(precoDoRefrigerante); // esse código irá logar apenas o valor do refrigerante

var precoDoSucoDeManga = encontrarValorDoProduto ('suco de manga')
    console.log(precoDoSucoDeManga); // esse código irá logar apenas o valor do suco de manga