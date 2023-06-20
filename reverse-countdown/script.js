function reverse() {
    document.getElementById("result").innerHTML = `<strong>Contagem Regressiva de 10 a 1</strong>`;

    for (cont = 10; cont >= 1; cont--) {
        document.getElementById("result2").innerHTML += `${cont} `;
    }
}