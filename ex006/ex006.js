function alert() {
    let num1 = window.prompt("Digite um número:");
    let num2 = window.prompt("Digite outro número:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let soma = num1 + num2;
    document.getElementById('result').innerText = `A soma entre ${num1} e ${num2} é ${soma}`;

}