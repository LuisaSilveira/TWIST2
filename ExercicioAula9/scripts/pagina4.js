/*Desenvolva uma página que faça o cálculo da tabuada de um número inteiro N, digitado pelo usuário.*/

alert("\t\t\t *** Tabuada *** \n\n\n");
let num = parseInt(prompt("Digite um numero inteiro: "))
let result = "\n"
for(let n=1;n<=10;n++){
    console.log(`${n} x ${num} = ${n*num}`);
    //concatenção de strings
    result+= `${n} x ${num} = ${n*num}\n`
}

alert(result);