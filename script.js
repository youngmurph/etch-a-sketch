let grid = document.createElement('div');
let header = document.createElement('h1');
header.textContent = `Conor's Etch-a-Sketch`;
let body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = 'Click here to change grid';
button.className = 'btn';
let userChoice = button.addEventListener('click', () => {
    let choice = prompt('How many rows and columns would you like?');
    return choice;
})

body.appendChild(header);
body.appendChild(button);
body.appendChild(grid);
grid.className = 'container';

let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
    let gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    grid.appendChild(gridRow);
    for (let j = 0; j < columns; j++) {
        let gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        grid.appendChild(gridColumn);
    }
}

function userChange() {
    for (let i = 0; i < userChoice; i++) {
        let gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        grid.appendChild(gridRow);
        for (let j = 0; j < userChoice; j++) {
            let gridColumn = document.createElement('div');
            gridColumn.className = 'grid-column';
            grid.appendChild(gridColumn);
        }
    }
}

userChange();

