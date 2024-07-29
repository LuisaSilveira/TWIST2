let texto = prompt("Digite um texto: ");
alert(typeof texto);

let idade = Number(prompt("Digite a sua idade: "));
alert(typeof idade);

let verificacao = typeof idade;
if(verificacao === 'number'){
    idade = parseInt(idade);
}

alert(typeof idade);

//operador ternario

let op = confirm("Você sabe Ruby? ");

let resp = (op)?"contratado":"Ignorar";
alert(resp);