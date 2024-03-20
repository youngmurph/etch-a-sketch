let grid = document.createElement('div');
let body = document.querySelector('body');
body.appendChild(grid);
grid.className = 'container';

let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        grid.appendChild(gridSquare);
    }
}

