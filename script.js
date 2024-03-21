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
   /* while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    } */
    if (userChoice > 1 && userChoice < 101) {
        for (let i = 0; i < userChoice; i++) {
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
        for (let j = 0; j < userChoice; j++) {
            let userGridColumn = document.createElement('div');
            userGridColumn.style.flexBasis = (`${(100 / userChoice)}%`);
            userGridColumn.className = 'user-grid-column';
            userGridColumn.addEventListener('mouseover', () => {
                userGridColumn.style.backgroundColor = rgb;
            })
            userGridColumn.addEventListener('mouseout', () => {
                userGridColumn.style.backgroundColor = '';
                userGridColumn.style.transitionDelay = '10s';
            })
            grid.appendChild(userGridColumn);
        }
    }
})

/* function userChange() {
    userChoice = prompt('How many rows and columns do you want in your grid? The maximum is 100.');
    const element = document.getElementById('grid-row');
    const element2 = document.getElementById('grid-column');
    element.remove();
    element2.remove();

    let columns = userChoice;
    let rows = userChoice;

    for (let i = 0; i < rows; i++) {
        let userGridRow = document.createElement('div');
        userGridRow.id = 'user-grid-row';
        grid.appendChild(userGridRow);
        userGridRow.style.flexBasis = `${(100 / userChoice)}%`; 
        for (let j = 0; j < columns; j++) {
            let userGridColumn = document.createElement('div');
            userGridColumn.id = 'user-grid-column';
            grid.appendChild(userGridColumn);
            userGridColumn.style.flexBasis = `${(100 / userChoice)}%`; 
        }
    } 
} */







