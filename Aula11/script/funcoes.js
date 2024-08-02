

function soma(a,b){
    let v1= parseFloat(a.value);
    let v2 = parseFloat(b.value);
    return(v1+v2);
}

function sub(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;
    let result = document.querySelector("#result");
    retorno= Number(val1) - Number(val2);
    result.value = calc;
}

function mult(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;
    let result= document.querySelector("#result");
    let calc = Number(val1)* Number(val2);
    result.value = calc;
    
}

function div(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;
    alert(val1/val2);
}

function mult(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;
    alert(val1*val2);
}

function limpa(){

}

window.addEventListener("load",function(){
    let btnsoma = document.querySelector("#soma");
    let btnsub = document.querySelector("#sub");
    let btnlt = document.querySelector("#mult");
    let btndiv = document.querySelector("#div");
    let btnlimpa = document.querySelector("#limpa");

    btnsoma.addEventListener("click", function(){
        let val1 = document.querySelector("#val1");
        let val2 = document.querySelector("#val2");
        resultado = soma(val1 + val2);
        result.value = resultado;

    });

    btnsub.addEventListener("click", function(){
        let result = document.querySelector("#result");
        let resultado = sub();
        result.value = resultado;
        
    });
    btnmult.addEventListener("click", function(){mult()});
    btndiv.addEventListener("click", function(){div()
        let val1 = document.querySelector("#val1");
        let val2 = document.querySelector("#val2");

    });
    btnlimpa.addEventListener("click", function(){limpa()});
})