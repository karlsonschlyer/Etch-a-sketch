const divContainer = document.querySelector('#container');

const rowAmount = 16
const boxAmount = 16

for (let i = 0; i < rowAmount; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    for (let i = 0; i < boxAmount; i++) {
        let divBox = document.createElement('div');
        divBox.setAttribute('class', 'box');
        divRow.appendChild(divBox);
    }
    divContainer.appendChild(divRow);
}