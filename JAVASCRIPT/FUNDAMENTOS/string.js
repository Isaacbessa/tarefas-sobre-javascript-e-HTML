const escola = 'coder'
console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('2'));
console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log('escola'.concat(escola).concat('!'));
console.log(escola.replace(3, 'e'));
console.log('Ana, Maria, Luiza'.split(','));

//O método charAt() retorna o caractere especificado a partir de uma string.
//O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
//O método indexOf() retorna o índice da primeira ocorrência do valor fornecido em searchValue, 
//começando a busca a partir de fromIndex. 
//Retorna -1 se o valor não for encontrado.
//O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string
//O método charCodeAt() retorna um número inteiro entre 0 e 65535