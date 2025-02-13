const ROWS = 2;
const COLS = 2;
const grid = document.querySelector('#grid');
const styles = ["game__cell--green", "game__cell--red", "game__cell--yellow", "game__cell--blue"]
var sequence = []
var userSequence = []
var score = 0
var win = false
var isPlaying = false
var isSequence = false
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

console.log(cells)

// Generar un número al azar
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Agregar un color a la secuencia actual
function addColor(){
    target = getRandomNumber(0, 3)
    console.log(cells[target])
    sequence.push(cells[target])
    return target
}

// Botones
green.addEventListener('click', () => {
    if (isPlaying && !isSequence) {
        green.className = "game__cell--green_active"
        setTimeout(() => {
            green.className = "game__cell--green"
        }, 200)
        userSequence.push(green)
        if (!validSequence()){
            gameLost()
        }
    }
}
)

blue.addEventListener('click', () => {
    if (isPlaying && !isSequence){
        blue.className = "game__cell--blue_active"
        setTimeout(() => {
            blue.className = "game__cell--blue"
        }, 200)
        userSequence.push(blue)
        if (!validSequence()){
            gameLost()
        }
    }
    }
)

red.addEventListener('click', () => {
    if (isPlaying && !isSequence){
        red.className = "game__cell--red_active"
        setTimeout(() => {
            red.className = "game__cell--red"
        }, 200)
        userSequence.push(red)
        if (!validSequence()){
            gameLost()
        }
    }   
    }
)

yellow.addEventListener('click', () => {
    if (isPlaying && !isSequence){
        yellow.className = "game__cell--yellow_active"
        setTimeout(() => {
            yellow.className = "game__cell--yellow"
        }, 200)
        userSequence.push(yellow)
        if (!validSequence()){
            gameLost()
        }
    }
    }
)

const openRank = document.querySelector('#view__rank');
const closeRank = document.querySelector('#rank-close');
const rankBox = document.querySelector('#rank__box');
const actionbutton = document.querySelector('#actionbutton');

openRank.addEventListener('click', () => {
    rankBox.classList.add('open');
    }
)

closeRank.addEventListener('click', () => {
    rankBox.classList.remove('open');
    }
)

function lightUpSequence (i){
    setTimeout(()=>{

        if (cells[0]== sequence[i]){
            console.log("verde")
            green.className = "game__cell--green_active"
            setTimeout( () => {
                green.className = "game__cell--green"
            }, 450)
        }
        if (cells[1]== sequence[i]) {
            console.log("rojo")
            red.className = "game__cell--red_active"
            setTimeout( () => {
                red.className = "game__cell--red"
            }, 450)
        } 
        if (cells[2]== sequence[i]) {
            console.log("amarillo")
            yellow.className = "game__cell--yellow_active"
            setTimeout( () => {
                yellow.className = "game__cell--yellow"
            }, 450)
        }
        if (cells[3]== sequence[i]) {
            console.log("azul")
            blue.className = "game__cell--blue_active"
            setTimeout( () => {
                blue.className = "game__cell--blue"
            }, 450)
    }
    i++;
        

    if (i < sequence.length ){
        lightUpSequence(i)
    } else {
        return
    }

    }, 700)
}
// Función para mostrar la secuencia actual
function showSequence(){
    var i = 0
    isSequence = true
    lightUpSequence(i)
    i = 0
    isSequence = false
}

// Función para ingresar al siguiente nivel/aumentar dificultad de la secuencia
function nextLevel(){
    console.log("next level")
    userSequence = []
    addColor()
    showSequence()
}

// Funcion para validar secuencia introducida por el usuario
function validSequence(){
    if (userSequence.length < sequence.length) {
        if (userSequence[userSequence.length-1] == sequence[userSequence.length-1]) {
            return true
        } else {
            return false
        }
    } else {
        if (userSequence[userSequence.length-1] == sequence[userSequence.length-1]){
            score+=1
            setTimeout(() => {}, 5000)
            nextLevel()
            return true
        } else {
            return false
        }
    }


}

// Función para iniciar el juego
function play(){
    console.log("jugando")
    isPlaying = true
    addColor();
    showSequence();
}

function gameLost(){
    alert("Perdiste!");
    fisnishGame()
}

function fisnishGame(){
    console.log("perdiste")
    score = 0
    userSequence = []
    sequence = []
    isPlaying = false
    isSequence = false

}

document.querySelector('#play__button').addEventListener('click', () => {
    if (!isPlaying){
        play()
    }
    }
);

document.querySelector('#reset__button').addEventListener('click', () => {
    if (isPlaying){
        alert("Juego Reiniciado!");
        fisnishGame()
    }
    }
);
