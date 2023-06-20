function contar() {
    document.getElementById("result").innerText = "Contando de 1 até 10, marcando os pares";

    for (cont = 1; cont <= 10; cont++) {
        if (cont % 2 == 0) {
            document.getElementById("result2").innerHTML += `<mark><strong>${cont}</strong></mark> `;

        } else {
            document.getElementById("result2").innerHTML += `${cont} `;

        }
    }
}