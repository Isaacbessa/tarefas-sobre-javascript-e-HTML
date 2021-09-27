// Object.preventExtensions
//deu false pois dentro do corpo da constante já tem valores cadastrado
const produto = Object.preventExtensions({ // o metodo de objeto Impede qualquer extensão de um objeto.
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // o método de objeto Determina se a extensão de um objeto é permitida.
// verifica se um objeto pode ser extendido (se é ou não possível adicinar novas propriedades).

produto.nome = 'Borracha' // modifiquei o nome do produto sem precisar ir na constante
produto.preco = 1.55 // fiz do mesmo jeito que o produto.nome, sem precisar ir na constante
produto.descricao = 'Borracha escolar branca'
delete produto.tag // deletei a propriedade tag criada no  corpo da constante produto
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)//sela um Objeto, evitando que novas propriedades sejam adicionadas à ele 
console.log('Selado:', Object.isSealed(pessoa)) // o metodo de objeto Determina se um objeto está selado.

pessoa.sobrenome = 'Silva' // não tem nenhuma proprieda chamada sobrenome, então nao fará diferença
delete pessoa.nome // não posso deletar pois a propriedade nome está selada
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes