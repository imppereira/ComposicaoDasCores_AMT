//Instruções
document.getElementById("botaoInstrucoes").onclick = function () {
    document.getElementById("popInstrucoesNivel1").classList.add('popInstrucoesNivel1On');
};
document.getElementById("botaoSairInstrucoes").onclick = function () {
    document.getElementById("popInstrucoesNivel1").classList.remove('popInstrucoesNivel1On');
};


//Pontuação
var pontuacaoNivel2 = 0;
console.log("pontuação: " + pontuacaoNivel2);
document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" + pontuacaoNivel2 + " </b>de 12 pontos";


//Cores Primárias
var arrayCoresPrimarias = ["arcAmarelo", "arcAzul", "arcVermelho"];
console.log(arrayCoresPrimarias);
var arrayCoresClicadas = [];

function comparaArraysPrimarias(coresClicadas, coresPrimarias) {
    if (coresClicadas.length != coresPrimarias.length) {
        return false;
    } else {
        var resultado = false;
        for (let i = 0; i < coresClicadas.length; i++) {

            if (coresClicadas[i] !== coresPrimarias[i]) {
                return false;
            } else {
                resultado = true;
            }
        }
        return resultado;
    }
}


//Cores Secundárias
var arrayCoresSecundarias = ["arcLaranja", "arcVerde", "arcVioleta"];
console.log(arrayCoresSecundarias);

function comparaArraysSecundarias(coresClicadas, coresSecundarias) {
    if (coresClicadas.length != coresSecundarias.length) {
        return false;
    } else {
        var resultado = false;
        for (let i = 0; i < coresClicadas.length; i++) {

            if (coresClicadas[i] !== coresSecundarias[i]) {
                return false;
            } else {
                resultado = true;
            }
        }
        return resultado;
    }
}


//Cores Terciárias
var arrayCoresTerciarias = ["arcAmareloLaranja", "arcAmareloVerde", "arcAzulVioleta", "arcVerdeAzul", "arcVermelhoLaranja", "arcVioletaVermelho"];
console.log(arrayCoresTerciarias);

function comparaArraysTerciarias(coresClicadas, coresTerciarias) {
    if (coresClicadas.length != coresTerciarias.length) {
        return false;
    } else {
        var resultado = false;
        for (let i = 0; i < coresClicadas.length; i++) {

            if (coresClicadas[i] !== coresTerciarias[i]) {
                return false;
            } else {
                resultado = true;
            }
        }
        return resultado;
    }
}


//Clicar nas Cores
var tituloCores = document.getElementById("tituloCores");

function clicarCor(cor) {
    for (let i = 0; i < cor.length; i++) {
        cor[i].addEventListener("click", function () {
            console.log(cor[0].classList.value);
            console.log(tituloCores.innerHTML);
            console.log(cor[0]);
            console.log(cor[0].style.fill);

            //Cores Primárias
            if (tituloCores.innerHTML == "3 cores primárias!") {
                if (cor[0].style.fill == "rgb(242, 229, 76)" || cor[0].style.fill == "rgb(210, 58, 47)" || cor[0].style.fill == "rgb(58, 112, 173)") {
                    cor[0].style.stroke = "#9EFF00";
                    cor[0].style.strokeWidth = "10";
                } else {
                    cor[0].style.stroke = "#FF0000";
                    cor[0].style.strokeWidth = "10";
                }
                arrayCoresClicadas.push(cor[0].classList.value);


                console.log(arrayCoresClicadas);
                arrayCoresClicadas.sort();
                console.log(arrayCoresClicadas);
                var circulo1 = document.getElementById("circulo1");
                var comparaPrimarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresPrimarias);

                //Correto
                if (comparaPrimarias == true) {
                    console.log("É igual!!!");
                    circulo1.style.border = "5px #9EFF00 solid";
                    //pontuacaoNivel2 = pontuacaoNivel2 + 3;
                    functionNivel2Conta3();
                    document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                        pontuacaoNivel2 + " </b>de 12 pontos";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                        document.getElementById("tituloMensagem").style.color = "#9EFF00";
                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');

                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            tituloCores.innerHTML = "3 cores secundárias!";
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);

                    //Incorreto
                } else if (arrayCoresClicadas.length == arrayCoresPrimarias.length && comparaPrimarias == false) {
                    console.log("Não é igual");
                    circulo1.style.border = "5px #FF0000 solid";
                    arcAmarelo[0].style.stroke = "#9EFF00";
                    arcAmarelo[0].style.strokeWidth = "10";
                    arcVermelho[0].style.stroke = "#9EFF00";
                    arcVermelho[0].style.strokeWidth = "10";
                    arcAzul[0].style.stroke = "#9EFF00";
                    arcAzul[0].style.strokeWidth = "10";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                        document.getElementById("tituloMensagem").style.color = "#FF0000";
                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');


                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            tituloCores.innerHTML = "3 cores secundárias!";
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);


                }
            }


            //Cores Secundárias
            if (tituloCores.innerHTML == "3 cores secundárias!") {
                if (cor[0].style.fill == "rgb(229, 149, 53)" || cor[0].style.fill == "rgb(102, 60, 133)" || cor[0].style.fill == "rgb(62, 140, 95)") {
                    cor[0].style.stroke = "#9EFF00";
                    cor[0].style.strokeWidth = "10";
                } else {
                    cor[0].style.stroke = "#FF0000";
                    cor[0].style.strokeWidth = "10";
                }
                arrayCoresClicadas.push(cor[0].classList.value);


                console.log(arrayCoresClicadas);
                arrayCoresClicadas.sort();
                console.log(arrayCoresClicadas);
                var circulo2 = document.getElementById("circulo2");
                var comparaSecundarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresSecundarias);

                //Correto
                if (comparaSecundarias == true) {
                    console.log("É igual!!!");
                    circulo2.style.border = "5px #9EFF00 solid";
                    //pontuacaoNivel2 = pontuacaoNivel2 + 3;
                    functionNivel2Conta3();
                    document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                        pontuacaoNivel2 + " </b>de 12 pontos";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                        document.getElementById("tituloMensagem").style.color = "#9EFF00";

                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');

                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            tituloCores.innerHTML = "6 cores terciárias!";
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);


                    //Incorreto
                } else if (arrayCoresClicadas.length == arrayCoresSecundarias.length && comparaSecundarias == false) {
                    console.log("Não é igual");
                    circulo2.style.border = "5px #FF0000 solid";
                    arcLaranja[0].style.stroke = "#9EFF00";
                    arcLaranja[0].style.strokeWidth = "10";
                    arcVerde[0].style.stroke = "#9EFF00";
                    arcVerde[0].style.strokeWidth = "10";
                    arcVioleta[0].style.stroke = "#9EFF00";
                    arcVioleta[0].style.strokeWidth = "10";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                        document.getElementById("tituloMensagem").style.color = "#FF0000";
                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');

                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            tituloCores.innerHTML = "6 cores terciárias!";
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);
                }
            }


            //Cores Terciárias
            if (tituloCores.innerHTML == "6 cores terciárias!") {
                if (cor[0].style.fill == "rgb(245, 199, 70)" || cor[0].style.fill == "rgb(219, 106, 53)" || cor[0].style.fill == "rgb(180, 39, 122)" || cor[0].style.fill == "rgb(69, 79, 148)" || cor[0].style.fill == "rgb(65, 148, 183)" || cor[0].style.fill == "rgb(150, 186, 68)") {
                    cor[0].style.stroke = "#9EFF00";
                    cor[0].style.strokeWidth = "10";
                } else {
                    cor[0].style.stroke = "#FF0000";
                    cor[0].style.strokeWidth = "10";
                }
                arrayCoresClicadas.push(cor[0].classList.value);


                console.log(arrayCoresClicadas);
                arrayCoresClicadas.sort();
                console.log(arrayCoresClicadas);
                var circulo3 = document.getElementById("circulo3");
                var comparaTerciarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresTerciarias);

                //Correto
                if (comparaTerciarias == true) {
                    console.log("É igual!!!");
                    circulo3.style.border = "5px #9EFF00 solid";
                    //pontuacaoNivel2 = pontuacaoNivel2 + 6;
                    functionNivel2Conta6();
                    document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                        pontuacaoNivel2 + " </b>de 12 pontos";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                        document.getElementById("tituloMensagem").style.color = "#9EFF00";
                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');


                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            setTimeout(() => {
                                window.location = "nivel3.html";
                            }, 1000);
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);


                    //Incorreto
                } else if (arrayCoresClicadas.length == arrayCoresTerciarias.length && comparaTerciarias == false) {
                    console.log("Não é igual");
                    circulo3.style.border = "5px #FF0000 solid";
                    arcVermelhoLaranja[0].style.stroke = "#9EFF00";
                    arcVermelhoLaranja[0].style.strokeWidth = "10";
                    arcVerdeAzul[0].style.stroke = "#9EFF00";
                    arcVerdeAzul[0].style.strokeWidth = "10";
                    arcVioletaVermelho[0].style.stroke = "#9EFF00";
                    arcVioletaVermelho[0].style.strokeWidth = "10";
                    arcAmareloLaranja[0].style.stroke = "#9EFF00";
                    arcAmareloLaranja[0].style.strokeWidth = "10";
                    arcAmareloVerde[0].style.stroke = "#9EFF00";
                    arcAmareloVerde[0].style.strokeWidth = "10";
                    arcAzulVioleta[0].style.stroke = "#9EFF00";
                    arcAzulVioleta[0].style.strokeWidth = "10";


                    setTimeout(() => {
                        document.getElementById("popMensagem").classList.add('popMensagemOn');
                        document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                        document.getElementById("tituloMensagem").style.color = "#FF0000";
                        textoMensagemNivel2();
                        document.getElementById("botaoSairMensagem").onclick = function () {
                            document.getElementById("popMensagem").classList.remove('popMensagemOn');

                            var path = document.querySelectorAll("path");
                            for (let i = 0; i < path.length; i++) {
                                console.log("sair");
                                path[i].style.stroke = "#FFFFFF";
                                path[i].style.strokeWidth = "2";
                            }
                            setTimeout(() => {
                                window.location = "nivel3.html";
                            }, 1000);
                            arrayCoresClicadas.length = 0;
                            console.log(arrayCoresClicadas);
                        };
                    }, 2000);
                }
            }

        });

    }
}


//Mensagem com a Explicação
function textoMensagemNivel2() {
    if (tituloCores.innerHTML == "3 cores primárias!") {
        document.getElementById("textoMensagem").innerHTML = "As <b>3 cores primárias</b> são: " +
            "o <b>vermelho (magenta)</b>, o <b>amarelo</b> e o <b>azul (ciano)</b>. Estas cores são primárias, pois não são criadas através de nenhuma mistura. " +
            "Se misturarmos 2 destas cores é possível obter as <b>cores secundárias</b>.";
    }

    if (tituloCores.innerHTML == "3 cores secundárias!") {
        document.getElementById("textoMensagem").innerHTML = "As <b>3 cores secundárias</b> são: " +
            "o <b>laranja</b>, o <b>verde</b> e o <b>violeta</b>. Estas cores são secundárias, pois são criadas através da mistura das cores primárias. " +
            "Se misturarmos 2 destas cores é possível obter as <b>cores terciárias</b>.";
    }

    if (tituloCores.innerHTML == "6 cores terciárias!") {
        document.getElementById("textoMensagem").innerHTML = "As <b>6 cores terciárias</b> são: " +
            "o <b>amarelo-laranja</b>, o <b>amarelo-verde</b>, o <b>azul-verde</b>, o <b>azul-violeta</b>, o <b>vermelho-laranja</b> e o <b>vermelho-violeta</b>. " +
            "Estas cores são terciárias, pois são criadas através da mistura das cores secundárias.";
    }
}


// Arc Amarelo
var arcAmarelo = document.getElementsByClassName("arcAmarelo");
clicarCor(arcAmarelo);

// Arc AmareloLaranja
var arcAmareloLaranja = document.getElementsByClassName("arcAmareloLaranja");
clicarCor(arcAmareloLaranja);

// Arc Laranja
var arcLaranja = document.getElementsByClassName("arcLaranja");
clicarCor(arcLaranja);

// Arc VermelhoLaranja
var arcVermelhoLaranja = document.getElementsByClassName("arcVermelhoLaranja");
clicarCor(arcVermelhoLaranja);

// Arc Vermelho
var arcVermelho = document.getElementsByClassName("arcVermelho");
clicarCor(arcVermelho);

// Arc VioletaVermelho
var arcVioletaVermelho = document.getElementsByClassName("arcVioletaVermelho");
clicarCor(arcVioletaVermelho);

// Arc Violeta
var arcVioleta = document.getElementsByClassName("arcVioleta");
clicarCor(arcVioleta);

// Arc AzulVioleta
var arcAzulVioleta = document.getElementsByClassName("arcAzulVioleta");
clicarCor(arcAzulVioleta);

// Arc Azul
var arcAzul = document.getElementsByClassName("arcAzul");
clicarCor(arcAzul);

// Arc VerdeAzul
var arcVerdeAzul = document.getElementsByClassName("arcVerdeAzul");
clicarCor(arcVerdeAzul);

// Arc Verde
var arcVerde = document.getElementsByClassName("arcVerde");
clicarCor(arcVerde);

// Arc AmareloVerde
var arcAmareloVerde = document.getElementsByClassName("arcAmareloVerde");
clicarCor(arcAmareloVerde);
