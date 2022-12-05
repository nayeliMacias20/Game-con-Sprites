const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
//var tecla = 0;
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
    console.log(e.key);
    animacion(e.key);
})
//Funcion animacion con las repeticiones
function animacion(key) {
    switch (key.toLowerCase()) {
        case 'a':
            frameY = 1;
            repetitions = 6;
            break;
        case 'b':
            frameY = 2;
            repetitions = 6;
            break;
        case 'c':
            frameY = 3;
            repetitions = 8;
            break;
        case 'd':
            frameY = 4;
            repetitions = 8;
            break;
        case 'e':
            frameY = 5;
            repetitions = 3;
            break;
        case 'f':
            frameY = 6;
            repetitions = 5;
            break;
        case 'g':
            frameY = 7;
            repetitions = 6;
            break;
        case 'h':
            frameY = 8;
            repetitions = 11;
            break;
        case 'i':
            frameY = 9;
            repetitions = 3;
            break;
        case 'j':
            frameY = 0;
            repetitions = 6;
            break;

        default:
            alert('Ingrese la tecla correcta :)');
            break;
    }
}
//Funcion animacion1
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //Mostraremos la imagen canvas1
    ctx.drawImage(player, 
                  frameX * spriteWidth, frameY * spriteHeight,
                  spriteWidth, spriteHeight,
                  0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    x++;
    requestAnimationFrame(animate);
}
animate();