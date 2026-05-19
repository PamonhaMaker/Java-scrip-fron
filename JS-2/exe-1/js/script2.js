console.log("Js 2 externo ok!")
//atv2
function calculaMedia(){
    let soma =0;
    let media = 0;
    let valores = document.getElementById("valores").value;
    console.log(valores);
    let array_numeros = valores.split("/");
    console.log(array_numeros.length);
    let qtdaNum = array_numeros.length;
    for (let i = 0; i < array_numeros.length; i++){
        soma = soma + Number(array_numeros[i]);
    }
    console.log(soma);
    media = soma/qtdaNum;
    console.log(media);

    let p = document.getElementById("media");
    p.innerText = "A média é: " + media
}
