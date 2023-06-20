function sort() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let rand = Math.random();
    let n1 = min + Math.trunc(dif * rand);
    document.getElementById("num").innerText += `\n\nAcabei de pensar no número ${n1}!`;

}

function clean() {
    document.getElementById("num").innerText = null;
}