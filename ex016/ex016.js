function idade() {
    let info = new Date;
    let ano = info.getFullYear();
    ano = parseFloat(ano);
    let nasc = window.prompt("Qual o seu ano de nascimento?");
    nasc = parseFloat(nasc);
    idade = ano - nasc;
    document.getElementById("result").innerText = `Quem nasceu em ${nasc} vai completar ${idade} em ${ano}`;

}