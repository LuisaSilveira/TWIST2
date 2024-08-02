/*Criar um script que solicite ao usuário o valor total da compra e a quantidade de parcelas a financiar e o 
sistema deve visualizar o valor de cada parcela de acordo com os juros da tabela abaixo. 
*/

let total = parseFloat(prompt("Digite o valor total da compra: "));
let parcelas = parseInt(prompt("Digite a quantidade de parcelas a financiar: 1, 2, ou 4"));

switch(parcelas){
    case(1):
        alert(`uma parcela de valor: ${total}` );
        break;
    case(2):
        let um =  total *1.03;
        let dois = um*1.03/2;
        alert(`Parcela um: ${um} reais\nParcela dois: ${dois} reais`);
        break;
    case(4):
        let um1 =  total *1.07;
        let dois1 = um*1.07/2;
        let tres = dois1*1.07/3;
        let quatro = tres*1.07/4;
        alert(`Parcela um: ${um1} reais\nParcela dois: ${dois1} reais\nParcela tres: ${tres} reais\nParcela quatro: ${quatro} reais`);
        break;
    default:
        alert("Opção de parcela invalida!");
        break;
}SS