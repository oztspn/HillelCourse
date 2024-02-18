let bodyWidth = window.innerWidth;
let bodyHeight = window.innerHeight;
let divSquare = document.getElementById("myDiv");
function setRandomColor() {
    let randColorRGB = [];
    for (let i = 0; i<3; i++) {
        randColorRGB.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${randColorRGB.join(',')})`;
}
function setRandomPosition() {
    let x = Math.floor(Math.random() * (bodyWidth - divSquare.offsetWidth));
    let y = Math.floor(Math.random() * (bodyHeight - divSquare.offsetHeight));
    return [x, y];
}
function moveDivRandomly() {
    let randomPosition = setRandomPosition();
    divSquare.style.left = randomPosition[0] + "px";
    divSquare.style.top = randomPosition[1] + "px";
    divSquare.style.backgroundColor = setRandomColor();
}
setInterval(moveDivRandomly, 1000);