/*Faça um script que leia três notas reais, calcule e mostre a média dessas notas.*/

let num1, num2, num3;
num1 = parseFloat(prompt("Digite a nota um:"));
num2 = parseFloat(prompt("Digite a nota dois:"));
num3 = parseFloat(prompt("Digite a nota tres:"));
alert(`Média aritmética: (${num1} + ${num2} + ${num3}) / 3 = ${(num1+num2+num3)/3}`);