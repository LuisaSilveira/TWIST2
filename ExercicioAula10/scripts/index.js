/**Desenvolver um site que exiba o conteúdo que salve o preço de  5 produtos digitados pelo usuáriono array compra, percorra o 
 * array e mostre os preços digitados, faça um somatório e exiba o valor final da compra. (obs: utilize laço de repetição)
 */

let compra = [];
let total = 0;
let result = "";

for(let i =0; i<5;i++){
    let preco = parseFloat(prompt("Digite o preço do produto a ser comprado: "));
    compra.push(preco);
}

for(let i = 0; i < compra.length; i++){
    total+=compra[i];
    result += `${compra[i]}\n`;
}

alert(`Preços digitados: \n${result}`);
alert(`Soma dos preços: ${total}`);