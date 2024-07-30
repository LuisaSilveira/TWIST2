/** uma estrutura de dados é um espaçona memória com tamanha n, one n é a quantidade de elementos dentro dela contendo um nome..
 * cada elemento pode ser acessado por meio de um ou mais indices;
 *
 * estrutura de dados unidimensional: 
 * é acessada por meio de um unico indice e: x[1]
 * x:variavel
 * []: indica que é para acessar um indice
 * 1: posicao do elemento dentro da variavel x
 *
 * 
 * estrutura de dados bidimensional
 * dois indices: linhas e colunas
 * x[1,2] ou x[1][2]
 * x: variavel
 * 1:linha
 * 2:coluna
 * 
 */

//colocar o array em branco
let teste = [];

//criar passando valores
let feira=['Banana','Maca','Pera','Uva',"Morango"];

console.log(`Um valor: ${feira[3]}`);
console.log(`Tudo: ${feira}`);

console.log(`tamanho de teste: ${teste.length}`);
teste.push(1);
teste.push("Abacate");
teste.push(1.99);
console.log(teste);
console.log(`tamanho de teste: ${teste.length}`);

/**  for padrão*/
//retorna o elemento
alert("\n\n** For Padrão **");
for(let i = 0; i < feira.length; i++){
    alert(feira[i]);
}

/** for of */
//retorna o elemento
alert("\n\n** For Of **")
for(let fruta of feira ){
    alert(fruta)
}

/** for in */
//retorna o indice
alert("\n\n** For In **")
for(let fruta in feira ){
    alert(fruta)
}