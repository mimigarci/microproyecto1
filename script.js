const ROWS = 2;
const COLS = 2;
const grid = document.querySelector('#grid');
const styles = ["game__cell--green", "game__cell--red", "game__cell--yellow", "game__cell--blue"]
var sequence = [0,1,2,3]
var userSequence = []
var score = 0
var win = false
const cells = [];


// Función para preparar la tabla
function prepareGrid() {
  
    for (let i = 0; i < ROWS * COLS; i++) {
      const cell = document.createElement('div');
      cell.classList.add(styles[i]);
      cells.push(cell);
      grid.appendChild(cell);
    }
}
  
prepareGrid()

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

// Botones

green.addEventListener('click', () => {
    green.className = "game__cell--green_active"
    setTimeout(() => {
        green.className = "game__cell--green"
    }, 450)
    }
)

blue.addEventListener('click', () => {
    blue.className = "game__cell--blue_active"
    setTimeout(() => {
        blue.className = "game__cell--blue"
    }, 450)
    }
)

red.addEventListener('click', () => {
    red.className = "game__cell--red_active"
    setTimeout(() => {
        red.className = "game__cell--red"
    }, 450)
    }
)

yellow.addEventListener('click', () => {
    yellow.className = "game__cell--yellow_active"
    setTimeout(() => {
        yellow.className = "game__cell--yellow"
    }, 450)
    }
)

const openRank = document.getElementById('view__rank');
const closeRank = document.getElementById('rank-close');
const rankBox = document.getElementById('rank__box');
const action__button = document.getElementById('action__button');

openRank.addEventListener('click', () => {
    rankBox.classList.add('open');
    }
)

closeRank.addEventListener('click', () => {
    rankBox.classList.remove('open');
    }
)

/*
REVISAR FUNCION

action__button.addEventListener('click', () => {
    showSequence()
    }
)
*/

// Función para mostrar la secuencia actual
function showSequence(){

    for (var i = 0; i < sequence.length; i++) {
        if (0 == sequence[i]){
            green.className = "game__cell--green_active"
            setTimeout( () => {
                green.className = "game__cell--green"
            }, 450)
        } 
        else if (1 == sequence[i]) {
            red.className = "game__cell--red_active"
            setTimeout( () => {
                red.className = "game__cell--red"
            }, 450)
        }
        else if (2 == sequence[i]) {
            yellow.className = "game__cell--yellow_active"
            setTimeout( () => {
                yellow.className = "game__cell--yellow"
            }, 450)
        }
        else if (3 == sequence[i]) {
            blue.className = "game__cell--blue_active"
            setTimeout( () => {
                blue.className = "game__cell--blue"
            }, 450)
        } else {
            console.log("Error")
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




