function maior() {
    let n1 = window.prompt('Digite o primeiro númmero:');
    let n2 = window.prompt('Digite o segundo número:');
    if (n1 > n2) {
        document.getElementById("result").innerText = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}.`;

    } else if (n1 < n2) {
        document.getElementById("result").innerText = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}.`;

    } else {
        document.getElementById("result").innerText = `Analisando os valores ${n1} e ${n2}, os valores são iguais.`;
    }
}