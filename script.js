const divContainer = document.querySelector('#container');

const rowAmount = 16
const boxAmount = 16

for (let i = 0; i < rowAmount; i++) {
    const divRow = document.createElement('div');
    for (let i = 0; i < boxAmount; i++) {
        const divBox = document.createElement('div');
        divRow.appendChild(divBox);
    }
}