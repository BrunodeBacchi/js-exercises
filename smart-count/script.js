function contar() {
    let num1 = Number(document.getElementById("fnum").valor);
    let num2 = Number(document.getElementById("fnum2").valor);

    if (num1 < num2) {
        for (cont = num1; cont <= num2; cont++) {
            document.getElementById("result").innerHTML += `<strong>Contando de ${num1} até ${num2}</strong>`;
            document.getElementById("result2").innerHTML += `${cont} `;

        }
    } else if (num1 > num2) {
        for (cont = num1; cont >= num2; cont--) {
            document.getElementById("result").innerHTML += `<strong>Contando de ${num1} até ${num2}</strong>`;
            document.getElementById("result2").innerHTML += `${cont} `;
        }
    }
}