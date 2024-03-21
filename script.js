let grid = document.createElement('div');
grid.className = 'container';
let header = document.createElement('h1');
header.textContent = `Conor's Etch-a-Sketch`;
let body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = 'Click here to change grid';
button.id = 'btn';

function randomColor(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
const r = randomColor(0, 255);
const g = randomColor(0, 255);
const b = randomColor(0, 255);
const rgb = `rgb(${r},${g},${b})`;

body.appendChild(header);
body.appendChild(button);
body.appendChild(grid);

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
            gridRow.style.transitionDelay = '10s';
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
                gridColumn.style.transitionDelay = '10s';
            })
            grid.appendChild(gridColumn);
        }
    }

let userChoice = '';

button.addEventListener('click', () => {
    userChoice = prompt('How many squares do you want per side? The maximum is 100.');
    grid.replaceChildren();
    let rows = userChoice;
    if (userChoice > 1 && userChoice < 100) {
        for (let i = 0; i < rows ** 2; i++) {
            let userGridRow = document.createElement('div');
            userGridRow.className = 'user-grid-row';
            userGridRow.style.flexBasis = (`${(100 / userChoice)}%`);
            userGridRow.addEventListener('mouseover', () => {
                userGridRow.style.backgroundColor = rgb;
            })
            userGridRow.addEventListener('mouseout', () => {
                userGridRow.style.backgroundColor = '';
                userGridRow.style.transitionDelay = '10s';
            })
            grid.appendChild(userGridRow);
        }
    }
})





