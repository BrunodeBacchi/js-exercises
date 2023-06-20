let computador = 0;
let jogador = 0;

function rand() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleat = Math.random()
    console.log(computador = min + Math.trunc(dif * aleat));

}

function play() {    
    jogador = window.prompt("Qual seu chute?");
    if (jogador < computador) {
        document.getElementById("result").innerText += `\n\nVocê falou ${jogador}. Meu número é MAIOR`;

    } else if (jogador > computador) {
        document.getElementById("result").innerText += `\n\nVocê falou ${jogador}. Meu número é MENOR`;

    } else if (jogador == computador) {
        document.getElementById("result").innerText += `\n\nParabéns! Você acertou. Eu tinha sorteado o valor ${computador}`;
        document.getElementById("botao").style.visibility = 'hidden';

    }
}