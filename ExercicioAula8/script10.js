/*Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule e mostre a idade dessa pessoa e seu nome em linhas separadas.
*/

let nascimento, nome, atual ;
nome = prompt("Digite seu nome:");
nascimento = parseInt(prompt("Digite seu ano de nascimento:"));
atual = parseInt(prompt("Digite o ano atual:"));
let idade = atual - nascimento;
alert(`${nome}`);
alert(`Idade:${idade}`);