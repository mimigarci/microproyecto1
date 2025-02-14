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
loadRank()

const green = cells[0];
const red = cells[1];
const yellow = cells[2];
const blue = cells[3];

const openRank = document.querySelector('#view__rank');
const closeRank = document.querySelector('#rank__close');
const rankBox = document.querySelector('#rank__box');
const rank = document.getElementById('rank');

const actionbutton = document.querySelector('#actionbutton');

const nameBox = document.querySelector('#name__box');
const nameInput = document.getElementById('name__input');
const savedName = document.querySelector('#saved__name');


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

function updateScore(score) {
    const element = document.querySelector("#current__score")
    element.textContent = score
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
            updateScore(score)
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

function finishGame(){
    console.log("perdiste")
    score = 0
    updateScore(score)
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

// Local Storage

savedName.addEventListener('click', () => {
    nameBox.classList.remove('open');
    inputName(score);
    finishGame();
});

// Se queda pegado en el input
function inputName(score){
    
    if (nameBox.classList.contains('open')) {
        const name = nameInput.value;
        if (name === '') {
            alert('Por favor introduzca un nombre válido!');
        } else {
            //No se porque no se activa la funcion, llega al skibidi pero no muestra el fak ldeir
            addToRank(name.value, score);
            saveRank();
            nameInput.value = '';
        }
    }
    console.log('skibidi')
}

function addToRank(name, score){
    console.log('fak ldier')
    const player = document.createElement('li');
    player.textContent = "Nombre: "+name+" Puntaje: "+score;
    console.log("DATA: "+player.textContent)
    rank.appendChild(player);
}

function saveRank(){
    let ranking = []
    rank.querySelectorAll('li').forEach(function(player){
        ranking.push(player.textContent);
    });

    localStorage.setItem('rank', JSON.stringify(ranking));
    alert('Nombre y puntaje guardados!');
}

function loadRank() {
    const rankList = JSON.parse(localStorage.getItem('rank'));
    if (rankList) {
        rankList.forEach(function(player) {
            const playerElement = document.createElement('li');
            playerElement.textContent = player;
            rank.appendChild(playerElement);
        });
    }
}

function gameLost(){
    alert("Perdiste!");

    win = false;
    if (win == false){
        nameBox.classList.add('open');
    }
}

/*
saveName.addEventListener('click', () => {
    nameBox.classList.remove('open');
});
*/
