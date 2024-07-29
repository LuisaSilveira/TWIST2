// Laço de repetição condicional
// While: verifica antes de fazer
// do/while: faz antes de verificar

let num = 11;

alert("\t\t\t *** Acerte o numero ***\n\n" + " O numero esta entre 1 e 15");
let dado = -1;
while(dado != num){
    dado = parseInt(prompt("Digite o número: "));
    if(dado!=num){
        alert("Você errou!!! Tente novamente");
    }
}

alert("Você acertou, Parabéns!!!");