let num = 11;
let dado;
let first = true

do{
    //exemplo do operador not !
    if(!first){
        alert("Você errou!!");
    }
    dado = parseInt(prompt("Digite um numero: "));
    first = false;
}while(dado!=num);

alert("Você acertou, Parabéns!!");