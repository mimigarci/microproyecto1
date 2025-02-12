const ROWS = 2;
const COLS = 2;

function prepareGrid() {
    const grid = document.querySelector('#grid');
  
    for (let i = 0; i < ROWS * COLS; i++) {
      const cell = document.createElement('div');
      cell.classList.add('game__cell');
      grid.appendChild(cell);
    }
    

  }

prepareGrid()