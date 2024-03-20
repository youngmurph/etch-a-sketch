let grid = document.createElement('div');
let header = document.createElement('h1');
let body = document.querySelector('body');
header.textContent = `Conor's Etch-a-Sketch`;
body.appendChild(header);
body.appendChild(grid);
grid.className = 'container';

let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    grid.appendChild(gridRow);
    for (let j = 0; j < columns; j++) {
        const gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        grid.appendChild(gridColumn);
    }
}

