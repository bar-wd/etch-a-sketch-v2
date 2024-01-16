'use-strict';

///////////////////////////////////////////////////////////
// Variables

let target;
let mouseDown = false;
const container = document.querySelector('.container');

///////////////////////////////////////////////////////////
// Event Listeners

container.addEventListener('mousedown', e => {
  e.preventDefault();
  mouseDown = true;
  target = e.target.classList;

  if (target.contains('column')) {
    target.add('black');
  }
});

container.addEventListener('mouseover', mouseOver);

window.addEventListener('mouseup', e => {
  mouseDown = false;
});

///////////////////////////////////////////////////////////
// Functions

function makeGrid(num) {
  for (let i = 0; i < num; i++) {
    let newRow = document.createElement('div');
    newRow.classList.add('new-div', 'row');
    container.appendChild(newRow);
    for (let j = 0; j < num; j++) {
      let newColumn = document.createElement('div');
      newColumn.classList.add('new-div', 'column');
      newRow.appendChild(newColumn);
    }
  }
}

function mouseOver(e) {
  target = e.target.classList;
  if (mouseDown === false) {
    return;
  } else if (target.contains('column')) {
    target.add('black');
  }
}

makeGrid(9);
