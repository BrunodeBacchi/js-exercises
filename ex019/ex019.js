function calc() {
    let n1 = window.prompt("Primeiro valor:");
    let n2 = window.prompt("Segundo valor:");
    let conta = window.prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`);
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    conta = parseFloat(conta);
    switch (conta) {
        case 1:
            document.getElementById('result1').innerText = "Calculando...";
            document.getElementById('result2').innerText = `\n${n1} + ${n2} = ${n1+n2}`;
            break
        case 2:
            document.getElementById('result1').innerText = "Calculando...";
            document.getElementById('result2').innerText = `\n${n1} - ${n2} = ${n1-n2}`;
            break
        case 3:
            document.getElementById('result1').innerText = "Calculando...";
            document.getElementById('result2').innerText = `\n${n1} x ${n2} = ${n1*n2}`;
            break
        case 4:
            document.getElementById('result1').innerText = "Calculando...";
            document.getElementById('result2').innerText = `\n${n1} / ${n2} = ${n1/n2}`;
            break

    }
}