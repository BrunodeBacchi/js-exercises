function contas() {
    let n1 = window.prompt("Digite um número:");
    n1 = parseFloat(n1);
    document.getElementById('results').innerText = `O número a ser analisado aqui será o ${n1}`;
    document.getElementById('results').innerText += `\n\nO seu valor absoluto é ${Math.abs(n1)}`;
    document.getElementById('results').innerText += `\n\nA sua parte inteira é ${Math.trunc(n1)}`;
    document.getElementById('results').innerText += `\n\nO valor inteiro mais próximo é ${Math.round(n1)}`;
    document.getElementById('results').innerText += `\n\nA sua raiz quadrada é ${Math.sqrt(n1)}`;
    document.getElementById('results').innerText += `\n\nA sua raiz cúbica é ${Math.cbrt(n1)}`;
    document.getElementById('results').innerText += `\n\nO valor de ${n1} ao quadrado é ${Math.pow(n1, 2)}`;
    document.getElementById('results').innerText += `\n\nO valor de ${n1} ao cubo é ${Math.pow(n1, 3)}`;

}