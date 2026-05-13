console.log("Acesso JS 1 externo OK");

//exe 01
let n1, n2;
function capturaValores(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
}

function mostraResult(){
    
}

function soma(){
    capturaValores()

    let resposta = Number(n1) + Number(n2);
    console.log("O resultado da soma é: " + resposta)

    let result = document.getElementById("result");
    result.value = resposta;
}
function subtracao(){
    capturaValores()

    let resposta = Number(n1) - Number(n2);
    console.log("O resultado da subtração é: " + resposta)

    let result = document.getElementById("result");
    result.value = resposta;
}
function multiplicacao(){
    capturaValores()

    let resposta = Number(n1) * Number(n2);
    console.log("O resultado da subtração é: " + resposta)

    let result = document.getElementById("result");
    result.value = resposta;
}
function divisao(){
    capturaValores()

    let resposta = Number(n1) / Number(n2);
    console.log("O resultado da subtração é: " + resposta)

    let result = document.getElementById("result");
    result.value = resposta;
}
