/**Desenvolver um site que gere um número aleatório de 0 a 20. O usuário deve chutar um número e o programa vai dizer se o número é maior ou menor que o chutado, 
 * o programa deverá ler o valor do usuário até ele acertar o número sorteado por meio de  uma mensagem. Quando o usuário acertar, o programa imprime quantas tentativas 
 * foram necessárias para descobrir. 
 * Para gerar o número aleatório você deverá usar o comando:  var num = Math.round(Math.random()*20) */

var numAleatorio = Math.round(Math.random()*20);

alert("Jogo: Tente adivinhar o número aleatório: ");
let numUsuario = -1;
let tentativas = 0;

while(numUsuario != numAleatorio){
    numUsuario = parseInt(prompt("Digite um número de 0 a 20: "));
    if(numUsuario!=numAleatorio){
        if(numUsuario>numAleatorio)
        alert("Você errou! O numero aleatório é menor que o digitado! Tente novamente!");
        else{
            alert("Você errou! O numero aleatório é maior que o digitado! Tente novamente!");
        }
    }
    tentativas++;
}

alert(`Você acertou, Parabéns!!!\n\n Número de tentativas: ${tentativas}`);
