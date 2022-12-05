const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
var tecla = 0;
const player = new Image();
//playerImage.src ='shadow_dog.png';
player.src = 'assets/shadow_dog.png';
let frameX = 0;
let frameY = 0;
let repetitions = 6;
let x = 0;
let y = 0;
//Medidas de imagen
const spriteWidth = 575;
const spriteHeight = 523;

window.addEventListener('keydown', e => {
    if (e.key == 'ArrowUp') {
        frameY++;
        if (frameY > 9) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
    if (e.key == 'ArrowDown') {
        frameY--;
        if (frameY < 0) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
})
//Funcion animacion2 con las repeticiones
function animateTwo() {
    if (frameY == 0) repetitions = 6;
    else if (frameY == 1) repetitions = 6;
    else if (frameY == 2) repetitions = 6;
    else if (frameY == 3) repetitions = 8;
    else if (frameY == 4) repetitions = 10;
    else if (frameY == 5) repetitions = 4;
    else if (frameY == 6) repetitions = 6;
    else if (frameY == 7) repetitions = 6;
    else if (frameY == 8) repetitions = 11;
    else if (frameY == 9) repetitions = 3;
}
//Funcion animacion1
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //Mostraremos la imagen canvas1
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    x++;
    requestAnimationFrame(animate);
}
animate();