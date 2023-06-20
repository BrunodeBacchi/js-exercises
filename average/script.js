function media() {
    let nome = window.prompt("Qual o nome do aluno?");
    let n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`);
    let n2 = window.prompt(`Qual a nota além de ${n1} de ${nome}`);
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById('result').innerText = `Calculando a nota final de ${nome}.`;
    document.getElementById('result').innerText += `\n\nAs notas obtidas foram ${n1} e ${n2}.`;
    document.getElementById('result').innerText += `\n\nA média final será ${(n1 + n2) / 2}.`;
    
}