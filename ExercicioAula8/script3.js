/*Crie um script que calcule as raízes de uma equação de 2º grau ax2 + bx + c. Supor que as raízes são reais. Para calcular a raiz você pode utilizar a função Math.sqrt (valor) 
– função própria do JavaScript. Essa função retorna o resultado da raiz quadrada que deverá ser guardado em alguma variável. Neste exemplo vamos supor que sempre teremos um 
delta válido.*/

//(-b+-raiz(b^2-4ac))/2*a

let a, b,c;
a = parseFloat(prompt("Digite a constante a:"));
b = parseFloat(prompt("Digite a constante b:"));
c = parseFloat(prompt("Digite a constante c:"));
console.log(a,b,c);
let discriminante = (b * b) - (4 * a * c);
let raizDiscriminante = Math.sqrt(discriminante);
let saida1 = ((-b + raizDiscriminante) / (2 * a));
let saida2 = ((-b - raizDiscriminante) / (2 * a));
alert(`(-b+-raiz(b^2-4ac))/2*a  = ${saida1} e ${saida2}`);