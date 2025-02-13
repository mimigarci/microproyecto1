const ROWS = 2;
const COLS = 2;
const grid = document.querySelector('#grid');
var sequence = []
var userSequence = []
var score = 0
var win = false


// Función para preparar la tabla
function prepareGrid() {
  
    for (let i = 0; i < ROWS * COLS; i++) {
      const cell = document.createElement('div');
      cell.classList.add('game__cell');
      grid.appendChild(cell);
    }
}
  
prepareGrid()

const cells = document.querySelectorAll('#grid .game__cell');
const green = cells[0];
const red = cells[1];
const yellow = cells[2];
const blue = cells[3];

// Generar un número al azar
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Agregar un color a la secuencia actual
function addColor(){
    target = getRandomNumber(0, 3)
    sequence.push(target)
    return target
}

// Testeo del click en la celda referente al color verde
green.addEventListener('click', () => {
    console.log('slay')
    }
)

// Función para mostrar la secuencia actual
function showSequence(){

    for (let i = 0; i < sequence.length; i++) {
        if (cells[0]== sequence[i]){
            setTimeout( () => {
                // light up green
            }, 1500)
        } 
        else if (cells[1]== sequence[i]) {
            setTimeout( () => {
                // light up red
            }, 1500)
        }
        else if (cells[2]== sequence[i]) {
            setTimeout( () => {
                // light up yellow
            }, 1500)
        }
        else if (cells[3]== sequence[i]) {
            setTimeout( () => {
                // light up blue
            }, 1500)
        }
    }
}

// Función para ingresar al siguiente nivel/aumentar dificultad de la secuencia
function nextLevel(){
    if (score == sequence.length){
        addColor()
        showSequence()
    }
}

// Funcion para validar secuencia introducida por el usuario
function validSequence(){
    
    if (userSequence.length != sequence.length){


    }

}

// Función para iniciar el juego
function play(){
    win = false
    if (win == false){

    }
}





