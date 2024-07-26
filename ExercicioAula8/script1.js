/*Uma empresa irá dar 25% de aumento para todos os funcionários, você deverá desenvolver um programa que leia o salário atual do funcionário. 
Após a leitura, calcule e mostre na própria página o salário atual em uma linha e em outra linha o salário com o aumento de 25%.*/

let aumento = 1.25;
let sal = parseFloat(prompt("Digite o seu salário:"));
conf = confirm("Deseja continuar?? ");
console.log(sal, conf);
alert(`Houve um aumento no salário de ${sal} * ${aumento} = ${sal*aumento}`);