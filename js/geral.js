/*//MUSICA COMEÇAR AO INICIAR A PÁGINA
setInterval(playMusic, 500);

function playMusic() {
    document.getElementById("audio").play();
}

//TIRAR SOM AO CLICAR
var botaoMusic = document.getElementById("botaoSom");
botaoMusic.addEventListener("click", checkSound);
function checkSound() {
    document.getElementById("audio").muted = !document.getElementById("audio").muted;

    if(document.getElementById("audio").muted === false){
        console.log("is false");
        document.getElementById("botaoSom").src = "img/BotaoSomOn.png";
    }
    else if(document.getElementById("audio").muted === true){
        console.log("is true");
        document.getElementById("botaoSom").src = "img/BotaoSomOff.png";
    }
}*/

//BOTÃO EXIT
document.getElementById("botaoSair").onclick = function () {
    document.getElementById("popConfirmacaoSair").classList.add('popConfirmacaoSairOn');
};
document.getElementById("botaoSairPopConfirmacaoSair").onclick = function () {
    document.getElementById("popConfirmacaoSair").classList.remove('popConfirmacaoSairOn');
};
document.getElementById("botaoSairJogo").onclick = function () {
    document.location.href = "index.html";
};
