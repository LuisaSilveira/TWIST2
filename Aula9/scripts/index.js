/*posso criar variaveis globais usno var e as local/bloco usando let*/

let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));

//se a idade for maior que 18 -> Entrada livre

if (idade > 18){
    alert(`${nome}, você pode entrar!!!`);
    let comanda = 100;
    let resp = confirm("Deseja beber uma cerveja?");
    if(resp){
        comanda-=120;
    }
    alert(`Saldo atual : ${comanda}`);
    let saida = confirm("Deseja ir embora?");
    if(saida){
        if(comanda<0){
            comanda = comanda *(-1);
            alert(`Sua conta ficou ${comanda}`);
            let pagamento = parseFloat(prompt("Digite o valor pago: "));
            let result = pagamento - comanda;
            if(result > 0){
                alert(`Seu troco é ${result}`);
            }
            else{
                if(result < 0){
                    alert("Você não pagou! Vai lavar pratos");
                }
                else{
                    alert(`Pagamento ok, ${nome} pode sair`);
                }
            }
        }
        
    }
}
else{
    alert(`${nome}, você NÃO pode entrar!!!`);
}