let click = 0

function add() {
    click ++
    document.getElementById('contador').innerText = `O contador está com ${click} cliques.`
}

function zerar() {
    click = 0
    document.getElementById('contador').innerText = 'O contador está com 0 cliques.';
}