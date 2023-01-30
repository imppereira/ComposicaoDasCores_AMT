//var corR = rgb(210, 58, 47); //VERMELHO
//var corB = rgb(58, 112, 173); // AZUL
//var corY = rgb(242, 229, 76); //AMARELO

var corG = "rgb(62, 140, 95)"; //VERDE
var corV = "rgb(102, 60, 133)"; //VIOLETA
var corO = "rgb(226, 143, 61)"; //LARANJA

var corYO = "rgb(245, 199, 70)"; //AMARELO LARANJA
var corRO = "rgb(218, 100, 54)"; //VERMELHO LARANJA
var corRV = "rgb(180, 39, 122)"; //VERMELHO VIOLETA
var corBV = "rgb(96, 98, 141)"; //AZUL VIOLETA
var corBG = "rgb(65, 148, 183)"; //AZUL VERDE
var corYG = "rgb(150, 186, 68)"; //AMARELO VERDE

var corDG = "rgb(158, 157, 69)"; //VERDE SECO --> resulta azul + amarelo + preto + amarelo --> 4 cliques
var corDB = "rgb(94, 78, 46)"; //CASTANHO ESCURO --> resulta vermelho + azul + amarelo + preto --> 4 cliques

//var corP = rgb(0); //PRETO
//var corW = rgb(255); //BRANCO
//var corPB = rgb(135); //CINZA

var coresPedidasNivel3 = [corO, corRO, corBV, corDG, corDB];
console.log(coresPedidasNivel3);
document.getElementById("quadradoCorPedida").style.fill = coresPedidasNivel3[Math.floor(Math.random() * coresPedidasNivel3.length)];
console.log(document.getElementById("quadradoCorPedida").style.fill);

var circuloDaCor = document.getElementById("circuloDaCor");
circuloDaCor.style.fill = "rgb(255,255,255)";
circuloDaCor.style.stroke = "rgb(0,0,0)";
circuloDaCor.style.strokeWidth = "1px";

var arrayCoresClicadas = [];
var arrayCoresClicadasRed = [];
var arrayCoresClicadasGreen = [];
var arrayCoresClicadasBlue = [];

var contadorClique = 0;

var pontuacaoNivel3 = 0;

var botaoAplicado = false;

var numeroCorClicadaNivel3 = 0;

document.getElementById("botaoApagar").onclick = function () {
    arrayCoresClicadas.length = 0;
    arrayCoresClicadasRed.length = 0;
    arrayCoresClicadasGreen.length = 0;
    arrayCoresClicadasBlue.length = 0;
    circuloDaCor.style.fill = "rgb(255,255,255)";
    contadorClique = 0;

    botaoAplicado = true;
}


//Se a cor for VERMELHO
var quadradoVermelho = document.getElementById("quadradoVermelho");
quadradoVermelho.onclick = function () {
    quadradoVermelho.style.fill = "rgb(210, 58, 47)";
    quadradoClicado(quadradoVermelho);
};

//Se a cor for AZUL
var quadradoAzul = document.getElementById("quadradoAzul");
quadradoAzul.onclick = function () {
    quadradoAzul.style.fill = "rgb(58, 112, 173)";
    quadradoClicado(quadradoAzul);
};

//Se a cor for AMARELO
var quadradoAmarelo = document.getElementById("quadradoAmarelo");
quadradoAmarelo.onclick = function () {
    quadradoAmarelo.style.fill = "rgb(242, 229, 76)";
    quadradoClicado(quadradoAmarelo);
};

//Se a cor for VERDE
/*var quadradoVerde = document.getElementById("quadradoVerde");
quadradoVerde.onclick = function () {
    quadradoVerde.style.fill = "rgb(62, 140, 95)";
    quadradoClicado(quadradoVerde);
};

//Se a cor for VIOLETA
var quadradoVioleta = document.getElementById("quadradoVioleta");
quadradoVioleta.onclick = function () {
    quadradoVioleta.style.fill = "rgb(102, 60, 133)";
    quadradoClicado(quadradoVioleta);
};

//Se a cor for LARANJA
var quadradoLaranja = document.getElementById("quadradoLaranja");
quadradoLaranja.onclick = function () {
    quadradoLaranja.style.fill = "rgb(229, 149, 53)";
    quadradoClicado(quadradoLaranja);
};

//Se a cor for Amarelo-Laranja
var quadradoAmarelo_Laranja = document.getElementById("quadradoAmarelo-Laranja");
quadradoAmarelo_Laranja.onclick = function () {
    quadradoAmarelo_Laranja.style.fill = "rgb(245, 199, 70)";
    quadradoClicado(quadradoAmarelo_Laranja);
};

//Se a cor for Vemerlho-Laranja
var quadradoVermelho_Laranja = document.getElementById("quadradoVermelho-Laranja");
quadradoVermelho_Laranja.onclick = function () {
    quadradoVermelho_Laranja.style.fill = "rgb(219, 106, 53)";
    quadradoClicado(quadradoVermelho_Laranja);
};

//Se a cor for Vermelho-Violeta
var quadradoVermelho_Violeta = document.getElementById("quadradoVermelho-Violeta");
quadradoVermelho_Violeta.onclick = function () {
    quadradoVermelho_Violeta.style.fill = "rgb(180, 39, 122)";
    quadradoClicado(quadradoVermelho_Violeta);
};

//Se a cor for Azul-Violeta
var quadradoAzul_Violeta = document.getElementById("quadradoAzul-Violeta");
quadradoAzul_Violeta.onclick = function () {
    quadradoAzul_Violeta.style.fill = "rgb(69, 79, 148)";
    quadradoClicado(quadradoAzul_Violeta);
};

//Se a cor for Azul-Verde
var quadradoAzul_Verde = document.getElementById("quadradoAzul-Verde");
quadradoAzul_Verde.onclick = function () {
    quadradoAzul_Verde.style.fill = "rgb(65, 148, 183)";
    quadradoClicado(quadradoAzul_Verde);

};

//Se a cor for Amarelo-Verde
var quadradoAmarelo_Verde = document.getElementById("quadradoAmarelo-Verde");
quadradoAmarelo_Verde.onclick = function () {
    quadradoAmarelo_Verde.style.fill = "rgb(150, 186, 68)";
    quadradoClicado(quadradoAmarelo_Verde);
};*/

//Se a cor for Preto
var quadradoPreto = document.getElementById("quadradoPreto");
quadradoPreto.onclick = function () {
    quadradoPreto.style.fill = "rgb(0, 0, 0)";
    quadradoClicado(quadradoPreto);
};

//Se a cor for Branco
var quadradoBranco = document.getElementById("quadradoBranco");
quadradoBranco.onclick = function () {
    quadradoBranco.style.fill = "rgb(255, 255, 255)";
    quadradoClicado(quadradoBranco);
};

//Se a cor for Cinza
/*var quadradoCinza = document.getElementById("quadradoCinza");
quadradoCinza.onclick = function () {
    quadradoCinza.style.fill = "rgb(135, 135, 135)";
    quadradoClicado(quadradoCinza);
};*/

function quadradoClicado(quadrado) {
    console.log("cliquei no:" + quadrado.id);
    console.log("cor do quadrado: " + quadrado.style.fill);

    contadorClique = contadorClique + 1;
    console.log("contadorClique " + contadorClique);

    arrayCoresClicadas.push(quadrado.style.fill);
    console.log(arrayCoresClicadas);

    var arrayIntermedio = [];
    var arrayIntermedioRed = [];
    var arrayIntermedioBlue = [];

    for (var i = 0; i < arrayCoresClicadas.length; i++) { //varra o array
        arrayIntermedio = arrayCoresClicadas[i].split(",");
        console.log(arrayCoresClicadas[i].split(","));

        //COMPONENTE VERMELHO
        arrayIntermedioRed = arrayIntermedio[0].split("(");

        //COMPONENTE AZUL
        arrayIntermedioBlue = arrayIntermedio[2].split(")");
    }
    //COMPONENTE VERMELHO
    arrayCoresClicadasRed.push(arrayIntermedioRed[1]);
    console.log("red");
    console.log(arrayCoresClicadasRed);
    var valorRedAntigo = 0;
    var valorRedNovo = 0;
    var somaRed = 0;
    var mediaRed = 0;

    //COMPONENTE VERDE-------------------------------------------
    arrayCoresClicadasGreen.push(arrayIntermedio[1]);
    console.log("green");
    console.log("arrayGreen " + arrayCoresClicadasGreen);
    var valorGreenAntigo = 0;
    var valorGreenNovo = 0;
    var somaGreen = 0;
    var mediaGreen = 0;

    //COMPONENTE AZUL-------------------------------------------
    arrayCoresClicadasBlue.push(arrayIntermedioBlue[0]);
    console.log("blue");
    console.log("arrayBlue " + arrayCoresClicadasBlue);
    var valorBlueAntigo = 0;
    var valorBlueNovo = 0;
    var somaBlue = 0;
    var mediaBlue = 0;

    if (contadorClique < 2) {
        //COMPONENTE VERMELHO-------------------------------------------
        valorRedAntigo = parseInt(arrayCoresClicadasRed[0]);
        valorRedNovo = valorRedAntigo;

        somaRed = valorRedAntigo + valorRedNovo;
        mediaRed = somaRed / 2;
        console.log("somaRed1 " + somaRed);
        console.log("mediaRed1 " + mediaRed);

        //COMPONENTE VERDE-------------------------------------------
        valorGreenAntigo = parseInt(arrayCoresClicadasGreen[0]);
        valorGreenNovo = valorGreenAntigo;

        somaGreen = valorGreenAntigo + valorGreenNovo;
        mediaGreen = somaGreen / 2;
        console.log("somaGreen1 " + somaGreen);
        console.log("mediaGreen1 " + mediaGreen);

        //COMPONENTE AZUL-------------------------------------------
        valorBlueAntigo = parseInt(arrayCoresClicadasBlue[0]);
        valorBlueNovo = valorBlueAntigo;

        somaBlue = valorBlueAntigo + valorBlueNovo;
        mediaBlue = somaBlue / 2;
        console.log("somaBlue1 " + somaBlue);
        console.log("mediaBlue1 " + mediaBlue);
    } else if (contadorClique == 2) {
        //COMPONENTE VERMELHO-------------------------------------------
        valorRedAntigo = parseInt(arrayCoresClicadasRed[0]);
        valorRedNovo = parseInt(arrayCoresClicadasRed[1]);

        somaRed = valorRedAntigo + valorRedNovo;
        mediaRed = somaRed / 2;
        console.log("somaRed2 " + somaRed);
        console.log("mediaRed2 " + mediaRed);

        arrayCoresClicadasRed.length = 0;
        arrayCoresClicadasRed.push(mediaRed);

        //COMPONENTE VERDE-------------------------------------------
        valorGreenAntigo = parseInt(arrayCoresClicadasGreen[0]);
        valorGreenNovo = parseInt(arrayCoresClicadasGreen[1]);

        somaGreen = valorGreenAntigo + valorGreenNovo;
        mediaGreen = somaGreen / 2;
        console.log("somaGreen2 " + somaGreen);
        console.log("mediaGreen2 " + mediaGreen);

        arrayCoresClicadasGreen.length = 0;
        arrayCoresClicadasGreen.push(mediaGreen);

        //COMPONENTE AZUL-------------------------------------------
        valorBlueAntigo = parseInt(arrayCoresClicadasBlue[0]);
        valorBlueNovo = parseInt(arrayCoresClicadasBlue[1]);

        somaBlue = valorBlueAntigo + valorBlueNovo;
        mediaBlue = somaBlue / 2;
        console.log("somaBlue2 " + somaBlue);
        console.log("mediaBlue2 " + mediaBlue);

        arrayCoresClicadasBlue.length = 0;
        arrayCoresClicadasBlue.push(mediaBlue);
    } else if (contadorClique > 2) {
        //COMPONENTE VERMELHO-------------------------------------------
        valorRedAntigo = parseInt(arrayCoresClicadasRed[1]);
        valorRedNovo = parseInt(arrayCoresClicadasRed[0]);

        somaRed = valorRedAntigo + valorRedNovo;
        mediaRed = somaRed / 2;
        console.log("somaRed3 " + somaRed);
        console.log("mediaRed3 " + mediaRed);

        arrayCoresClicadasRed.length = 0;
        arrayCoresClicadasRed.push(mediaRed);

        //COMPONENTE VERDE-------------------------------------------
        valorGreenAntigo = parseInt(arrayCoresClicadasGreen[1]);
        valorGreenNovo = parseInt(arrayCoresClicadasGreen[0]);

        somaGreen = valorGreenAntigo + valorGreenNovo;
        mediaGreen = somaGreen / 2;
        console.log("somaGreen3 " + somaGreen);
        console.log("mediaGreen3 " + mediaGreen);

        arrayCoresClicadasGreen.length = 0;
        arrayCoresClicadasGreen.push(mediaGreen);

        //COMPONENTE AZUL-------------------------------------------
        valorBlueAntigo = parseInt(arrayCoresClicadasBlue[1]);
        valorBlueNovo = parseInt(arrayCoresClicadasBlue[0]);

        somaBlue = valorBlueAntigo + valorBlueNovo;
        mediaBlue = somaBlue / 2;
        console.log("somaBlue3 " + somaBlue);
        console.log("mediaBlue3 " + mediaBlue);

        arrayCoresClicadasBlue.length = 0;
        arrayCoresClicadasBlue.push(mediaBlue);
    }

    //CIRCULO-------------------------------------------
    //circuloDaCor.style.fill = arrayCoresClicadas.slice(-1);
    circuloDaCor.style.fill = "rgb(" + parseInt(mediaRed) + "," + parseInt(mediaGreen) + "," + parseInt(mediaBlue) + ")";
    console.log("cor co circulo " + circuloDaCor.style.fill);

    console.log("cor co quadrado " + document.getElementById("quadradoCorPedida").style.fill);

    //ACERTOU
    if (circuloDaCor.style.fill == document.getElementById("quadradoCorPedida").style.fill) {
        numeroCorClicadaNivel3 = numeroCorClicadaNivel3 + 1;
        circuloDaCor.style.strokeWidth = "5px";
        circuloDaCor.style.stroke = "#9EFF00";

        funcaoPontuacaoNivel3();
        document.getElementById("pontuacaoNivel3").innerHTML = "Pontuação Nível 3: <b>" + pontuacaoNivel3 + " </b>de 25 pontos";

        const indexStringNivel3 = coresPedidasNivel3.indexOf(document.getElementById("quadradoCorPedida").style.fill);
        coresPedidasNivel3.splice(indexStringNivel3, 1);
        console.log(coresPedidasNivel3);

        botaoAplicado = false;

        setTimeout(() => {
            document.getElementById("popMensagem").classList.add('popMensagemOn');
            document.getElementById("tituloMensagem").innerHTML = "Conseguiste!";
            document.getElementById("tituloMensagem").style.color = "#9EFF00";
            textoMensagemNivel3();

            document.getElementById("botaoSairMensagem").onclick = function () {
                circuloDaCor.style.stroke = "rgb(0,0,0)";
                circuloDaCor.style.strokeWidth = "1px";
                document.getElementById("popMensagem").classList.remove('popMensagemOn');
                setTimeout(() => {
                    acertei();
                    if (coresPedidasNivel3.length == 0) {
                        setTimeout(() => {
                            window.location = "index.html";
                        }, 1000);
                    }
                }, 1000);
            }
        }, 2000);
    }
}

function acertei() {
    console.log("ESTÁ CERTO");
    //REFRESH
    arrayCoresClicadas.length = 0;
    arrayCoresClicadasRed.length = 0;
    arrayCoresClicadasGreen.length = 0;
    arrayCoresClicadasBlue.length = 0;
    circuloDaCor.style.fill = "rgb(255,255,255)";
    contadorClique = 0;
    //NOVA COR
    document.getElementById("quadradoCorPedida").style.fill = coresPedidasNivel3[Math.floor(Math.random() * coresPedidasNivel3.length)];
    console.log(document.getElementById("quadradoCorPedida").style.fill);
}

function textoMensagemNivel3() {
    if ((document.getElementById("quadradoCorPedida").style.fill) == corO) { //LARANJA
        document.getElementById("textoMensagem").innerHTML = "Para chegar à cor <b>laranja</b> deve-se misturar <b>amarelo</b> + <b>vermelho (magenta)</b>.";
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corRO) { //VERMELHO ALARANJADO
        document.getElementById("textoMensagem").innerHTML = "Para chegar à cor <b>vermelho-laranja</b> deve-se misturar <b>amarelo</b> + <b>vermelho (magenta)</b> + <b>vermelho (magenta)</b>.";
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corBV) { //AZUL VIOLETA
        document.getElementById("textoMensagem").innerHTML = "Para chegar à cor <b>azul-violeta</b> deve-se misturar <b>azul (ciano)</b> + <b>vermelho (magenta)</b> + <b>azul (ciano)</b>.";
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corDG) { //VERDE SECO
        document.getElementById("textoMensagem").innerHTML = "Para chegar à cor <b>verde-seco</b> deve-se misturar <b>azul (ciano)</b> + <b>amarelo</b> + <b>preto</b> + <b>amarelo</b>.";
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corDB) { //CASTANHO ESCURO
        document.getElementById("textoMensagem").innerHTML = "Para chegar à cor <b>castanho-escuro</b> deve-se misturar <b>vermelho (magenta)</b> + <b>azul (ciano)</b> + <b>amarelo</b> + <b>preto</b>.";
    }
}

function funcaoPontuacaoNivel3() {
    var circuloPontuacao = document.getElementById("ponto" + [numeroCorClicadaNivel3]);

    if ((document.getElementById("quadradoCorPedida").style.fill) == corO) { //LARANJA
        console.log("Número de cliques necessário = 2");
        if (botaoAplicado == false && contadorClique == 2) {
            functionNivel3Conta5();
            //pontuacaoNivel3 = pontuacaoNivel3 + 5;
            circuloPontuacao.style.border = "5px #9EFF00 solid";
        } else if (botaoAplicado == true) {
            functionNivel3Conta3();
            //pontuacaoNivel3 = pontuacaoNivel3 + 3;
            circuloPontuacao.style.border = "5px #FF945F solid";
        }
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corRO) { //VERMELHO ALARANJADO
        console.log("Número de cliques necessário = 3");
        if (botaoAplicado == false && contadorClique == 3) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 5;
            functionNivel3Conta5();
            circuloPontuacao.style.border = "5px #9EFF00 solid";
        } else if (botaoAplicado == true) {
            functionNivel3Conta3();
            //pontuacaoNivel3 = pontuacaoNivel3 + 3;
            circuloPontuacao.style.border = "5px #FF945F solid";
        }
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corBV) { //AZUL VIOLETA
        console.log("Número de cliques necessário = 3");
        if (botaoAplicado == false && contadorClique == 3) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 5;
            functionNivel3Conta5();
            circuloPontuacao.style.border = "5px #9EFF00 solid";
        } else if (botaoAplicado == true) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 3;
            functionNivel3Conta3();
            circuloPontuacao.style.border = "5px #FF945F solid";
        }
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corDG) { //VERDE SECO
        console.log("Número de cliques necessário = 4");
        if (botaoAplicado == false && contadorClique == 4) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 5;
            functionNivel3Conta5();
            circuloPontuacao.style.border = "5px #9EFF00 solid";
        } else if (botaoAplicado == true) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 3;
            functionNivel3Conta3();
            circuloPontuacao.style.border = "5px #FF945F solid";
        }
    }
    if ((document.getElementById("quadradoCorPedida").style.fill) == corDB) { //CASTANHO ESCURO
        console.log("Número de cliques necessário = 4");
        if (botaoAplicado == false && contadorClique == 4) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 5;
            functionNivel3Conta5();
            circuloPontuacao.style.border = "5px #9EFF00 solid";
        } else if (botaoAplicado == true) {
            //pontuacaoNivel3 = pontuacaoNivel3 + 3;
            functionNivel3Conta3();
            circuloPontuacao.style.border = "5px #FF945F solid";
        }
    }
    pontuacaoFinalConta();
}