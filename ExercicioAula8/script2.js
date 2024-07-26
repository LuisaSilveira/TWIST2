/*Crie um script que calcule e mostre na própria página a média aritmética de 4 números reais digitados pelo usuário.*/

let num1, num2, num3, num4;
num1 = parseFloat(prompt("Digite o número um:"));
num2 = parseFloat(prompt("Digite o número dois:"));
num3 = parseFloat(prompt("Digite o número tres:"));
num4 = parseFloat(prompt("Digite o número quatro:"));
console.log(num1,num2,num3,num4);
alert(`Média aritmética: (${num1} + ${num2} + ${num3} + ${num4}) / 4 = ${(num1+num2+num3+num4)/4}`);