function estação() {
    let mês = window.prompt("Digite o mês em extenso (ex: Setembro):");
    let estação
    switch (mês.toLocaleUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    document.getElementById('result').innerText = `No mês de ${mês}, estamos na estação ${estação}`;

}