let container = document.createElement('div');
let body = document.querySelector('body');
container.id = 'container';
body.appendChild(container);

for (i = 0; i < 16; i++) {
    let gameDiv = document.createElement('div');
    gameDiv.id = 'gamebox';
    container.appendChild(gameDiv);

    if (i % 4 == 0) {
        
    }
}
