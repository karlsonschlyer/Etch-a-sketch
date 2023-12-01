function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function drawGrid (size) {
    const rowAmount = size;
    const boxAmount = size;
    for (let i = 0; i < rowAmount; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    for (let i = 0; i < boxAmount; i++) {
        let divBox = document.createElement('div');
        divBox.setAttribute('class', 'box');
        divBox.addEventListener('mouseenter',(event) => {
            divBox.setAttribute('class', 'box change-color');
        })
        divRow.appendChild(divBox);
    }
    divContainer.appendChild(divRow);
    }
}

const divContainer = document.querySelector('#container');
const button = document.querySelector('button');
button.addEventListener('click',(event) => {
    removeAllChildNodes(divContainer);
    const size = prompt("Enter a number from 1 to 100");
    drawGrid(size);
})

