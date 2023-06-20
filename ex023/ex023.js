function par() {
    document.getElementById("result").innerHTML = `<strong>Números pares de 1 até 10</strong>`;

    for (cont = 1; cont <= 10; cont++) {
        if (cont % 2 == 0) {
            document.getElementById("result2").innerHTML += `${cont} `;

        } else {
            null;

        }
    }
}