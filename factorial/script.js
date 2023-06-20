function fatorial() { 
    let num = Number(document.getElementById("fnum").value);
    let num2 = num;
    let res = 1;
    document.getElementById("result2").innerHTML = `Calculando fatorial de ${num}:<br>`;

    for (num2; num2 > 1; num2--) {
        document.getElementById("result2").innerHTML += `${num2} x `;
        res *= num2;
    }

    document.getElementById("result2").innerHTML += `1 = ${res}`;

}