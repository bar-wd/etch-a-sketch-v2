'use-strict';

///////////////////////////////////////////////////////////
// Variables

let target;
let mouseDown = false;
let columnAll;
const container = document.querySelector('.container');
const column = document.querySelector('.column');
const clear = document.querySelector('.clear');

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

clear.addEventListener('click', clearGrid);

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
  columnAll = document.querySelectorAll('.column');
}

function mouseOver(e) {
  target = e.target.classList;
  if (mouseDown === false) {
    return;
  } else if (target.contains('column')) {
    target.add('black');
  }
}

function clearGrid() {
  columnAll.forEach(each => {
    each.classList.remove('black');
  });
}

makeGrid(9);

console.log(columnAll);
