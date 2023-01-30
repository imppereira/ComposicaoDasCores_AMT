var pontuacaoFinal;
var pontuacaoNivel1;
var pontuacaoNivel2;
var pontuacaoNivel3;

var arrayPontuacaoNivel1 = [];
var arrayPontuacaoNivel2 = [];
var arrayPontuacaoNivel3 = [];


function pontuacaoNivel1Conta() {
    pontuacaoNivel1 = pontuacaoNivel1 + 1;
    console.log("pontuacaoNivel1 " + pontuacaoNivel1);
    arrayPontuacaoNivel1.push(pontuacaoNivel1);

    pontuacaoFinalConta();
}

function functionNivel2Conta3() {
    pontuacaoNivel2 = pontuacaoNivel2 + 3;
    console.log("pontuacaoNivel2 " + pontuacaoNivel2);
    arrayPontuacaoNivel2.push(pontuacaoNivel2);

    pontuacaoFinalConta()
}

function functionNivel2Conta6() {
    pontuacaoNivel2 = pontuacaoNivel2 + 6;
    console.log("pontuacaoNivel2 " + pontuacaoNivel2);
    arrayPontuacaoNivel2.push(pontuacaoNivel2);

    pontuacaoFinalConta()
}

function functionNivel3Conta3() {
    pontuacaoNivel3 = pontuacaoNivel3 + 3;
    console.log("pontuacaoNivel3 " + pontuacaoNivel3);
    arrayPontuacaoNivel3.push(pontuacaoNivel3);

    pontuacaoFinalConta()
}

function functionNivel3Conta5() {
    pontuacaoNivel3 = pontuacaoNivel3 + 5;
    console.log("pontuacaoNivel3 " + pontuacaoNivel3);
    arrayPontuacaoNivel3.push(pontuacaoNivel3);

    pontuacaoFinalConta()
}


function pontuacaoFinalConta() {
    if (arrayPontuacaoNivel1.length == 0 && arrayPontuacaoNivel2.length == 0 && arrayPontuacaoNivel3.length == 0){
        pontuacaoFinal = 0;
    }
    else if (arrayPontuacaoNivel2.length == 0 && arrayPontuacaoNivel3.length == 0){
        console.log("nivel1");
        pontuacaoFinal = arrayPontuacaoNivel1[arrayPontuacaoNivel1.length - 1];
    }
    else if (arrayPontuacaoNivel3.length == 0){
        console.log("pontuação final"+pontuacaoFinal);
        console.log("nivel2");
        console.log("ultimo elemento nivel 1 "+arrayPontuacaoNivel1[arrayPontuacaoNivel1.length - 1]);
        console.log("ultimo elemento nivel 2 "+arrayPontuacaoNivel2[arrayPontuacaoNivel2.length - 1]);
        pontuacaoFinal = arrayPontuacaoNivel1[arrayPontuacaoNivel1.length - 1] + arrayPontuacaoNivel2[arrayPontuacaoNivel2.length - 1];
    }
    else {
        console.log("nivel3");
        pontuacaoFinal = arrayPontuacaoNivel1[arrayPontuacaoNivel1.length - 1] + arrayPontuacaoNivel2[arrayPontuacaoNivel2.length - 1] + arrayPontuacaoNivel3[arrayPontuacaoNivel3.length - 1];
    }
    //pontuacaoFinal = pontuacaoNivel1 + pontuacaoNivel2 + pontuacaoNivel3;
    console.log("pontuacaoFinal " + pontuacaoFinal);
    document.getElementById("pontuacaoFinal").innerHTML = "Pontuação Final: " + pontuacaoFinal + " pontos";
}


