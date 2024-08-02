/*Faça um script que receba um número inteiro e mostre se esse número é par ou ímpar. */

let numInt = parseInt(prompt("Digite um numero inteiro"));

if(numInt%2 == 0){
    alert(`O numero ${numInt} é par`);
}

else{
    alert(`O numero ${numInt} é impar`);
}