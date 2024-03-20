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
});

const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomColor(0, 255);
const g = randomColor(0, 255);
const b = randomColor(0, 255);
const rgb = `rgb(${r},${g},${b})`;

body.appendChild(header);
body.appendChild(button);
body.appendChild(grid);
grid.className = 'container';

let rows = 16;
let columns = 16;

    for (let i = 0; i < rows; i++) {
        let gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        gridRow.addEventListener('mouseover', () => {
            gridRow.style.backgroundColor = rgb;
        })
        gridRow.addEventListener('mouseout', () => {
            gridRow.style.backgroundColor = '';
        })
        grid.appendChild(gridRow);
        for (let j = 0; j < columns; j++) {
            let gridColumn = document.createElement('div');
            gridColumn.className = 'grid-column';
            gridColumn.addEventListener('mouseover', () => {
                gridColumn.style.backgroundColor = rgb;
            })
            gridColumn.addEventListener('mouseout', () => {
                gridColumn.style.backgroundColor = '';
            })
            grid.appendChild(gridColumn);
        }
    }


function userChange() {
    for (let i = 0; i < userChoice; i++) {
        let userGridRow = document.createElement('div');
        userGridRow.className = 'user-grid-row';
        grid.appendChild(userGridRow).style.flexBasis = ((100 / userChoice)`%`);
        for (let j = 0; j < userChoice; j++) {
            let userGridColumn = document.createElement('div');
            userGridColumn.className = 'user-grid-column';
            grid.appendChild(userGridColumn).style.flexBasis = ((100 / userChoice)`%`);
        }
    }
}



