/*Faça um script que receba dois números inteiros e mostre qual é o maior ou se são iguais. 
*/

let numInt = parseInt(prompt("Digite um numero inteiro"));
let numInt2 = parseInt(prompt("Digite outro numero inteiro"));

if(numInt > numInt2){
    alert(`O numero ${numInt} é maior que ${numInt2} `);
}
else{
    if(numInt < numInt2){
        alert(`O numero ${numInt2} é maior que ${numInt} `);
    }
    else{
        alert(`Os dois numeros são iguais`);
    }
}
