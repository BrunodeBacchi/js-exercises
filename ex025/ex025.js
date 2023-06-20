function contador() {
    document.getElementById("result2").innerHTML = "";

    let num = Number(document.getElementById("fnum").value);
    for (cont = 0; cont <= num; cont++) {
        document.getElementById("result").innerHTML = `Contando de 0 até ${num}`;
        document.getElementById("result2").innerHTML += `${cont} `;

    }
}