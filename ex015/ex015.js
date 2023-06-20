function infos() {
    let meses = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");
    let dias = new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");
    let inf = new Date;
    let dia = inf.getDate();
    let mes = inf.getMonth();
    let ano = inf.getFullYear();
    let sema = inf.getDay();
    let hora = inf.getHours();
    let min = inf.getMinutes();
    let sec = inf.getSeconds();
    document.getElementById("inform").innerText = `Dia: ${dia}`;
    document.getElementById("inform").innerText += `\n\nMês: ${meses[mes]}`;
    document.getElementById("inform").innerText += `\n\nAno: ${ano}`;
    document.getElementById("inform").innerText += `\n\nDia da semana: ${dias[sema]}`;
    document.getElementById("inform").innerText += `\n\nHora: ${hora}`;
    document.getElementById("inform").innerText += `\n\nMinutos: ${min}`;
    document.getElementById("inform").innerText += `\n\nSegundos: ${sec}`;

}