'use-strict';

///////////////////////////////////////////////////////////
// Variables
let state = 0;
let target;
let mouseDown = false;
let columnAll;
let rows;
let sliderValue = 25;
let black = true;
const container = document.querySelector('.container');
const column = document.querySelector('.column');
const clear = document.querySelector('.clear');
const slider = document.querySelector('.slider');
const sliderInput = document.querySelector('input');
const blackDiv = document.querySelector('.black-div');
const whiteDiv = document.querySelector('.white-div');

///////////////////////////////////////////////////////////
// Event Listeners

container.addEventListener('mousedown', changeGridColor);

container.addEventListener('mouseover', mouseOver);

window.addEventListener('mouseup', e => {
  mouseDown = false;
});

clear.addEventListener('click', clearGrid);

slider.addEventListener('mouseup', getSliderValue);

slider.addEventListener('click', makeGrid);

blackDiv.addEventListener('click', makeBlack);

whiteDiv.addEventListener('click', makeWhite);

///////////////////////////////////////////////////////////
// Functions

function makeGrid(num) {
  num = sliderValue;

  if (state === 1) {
    deleteGrid();
  }

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
  selectColumns();
  selectRows();
  state = 1;
}

function mouseOver(e) {
  target = e.target.classList;
  if (mouseDown === false) {
    return;
  } else if (target.contains('column') && black === true) {
    target.add('black');
  } else if (target.contains('column') && black === false) {
    target.add('white');
  }
}

function changeGridColor(e) {
  e.preventDefault();
  mouseDown = true;
  target = e.target.classList;

  if (target.contains('column') && black === true) {
    target.add('black');
  }
}

function clearGrid() {
  columnAll.forEach(each => {
    each.classList.remove('black');
  });
}

function deleteGrid() {
  rows.forEach(row => {
    row.remove();
  });
}

function selectColumns() {
  columnAll = document.querySelectorAll('.column');
}

function selectRows() {
  rows = document.querySelectorAll('.row');
}

function getSliderValue() {
  sliderValue = parseInt(sliderInput.value);
}

function makeBlack() {
  black = true;
  blackDiv.classList.add('selected');
  whiteDiv.classList.remove('selected');
}

function makeWhite() {
  black = false;
  blackDiv.classList.remove('selected');
  whiteDiv.classList.add('selected');
}

makeGrid(25);
