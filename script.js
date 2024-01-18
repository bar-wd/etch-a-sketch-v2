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
let rainbow = false;
let rgb;
const container = document.querySelector('.container');
const column = document.querySelector('.column');
const clear = document.querySelector('.clear');
const slider = document.querySelector('.slider');
const sliderInput = document.querySelector('input');
const blackDiv = document.querySelector('.black-div');
const whiteDiv = document.querySelector('.white-div');
const rainbowDiv = document.querySelector('.rainbow-div');

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
  } else if (target.contains('column') && rainbow === true) {
    e.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
  } else if (target.contains('column') && black === true) {
    target.add('black');
  } else if (target.contains('column') && black === false) {
    e.target.style.backgroundColor = 'white';
  }
}

function changeGridColor(e) {
  e.preventDefault();
  mouseDown = true;
  target = e.target.classList;

  if (target.contains('column') && rainbow === true) {
    e.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
  } else if (target.contains('column') && black === true) {
    target.add('black');
  } else if (target.contains('column') && black === false) {
    e.target.style.backgroundColor = 'white';
  }
}

function clearGrid() {
  columnAll.forEach(each => {
    each.style.backgroundColor = 'white';
  });
  clear.classList.add('selected');
  setTimeout(function () {
    clear.classList.remove('selected');
  }, 200);
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
  rainbow = false;
  whiteDiv.classList.remove('selected');
  rainbowDiv.classList.remove('selected');
  blackDiv.classList.add('selected');
}

function makeWhite() {
  black = false;
  rainbow = false;
  blackDiv.classList.remove('selected');
  rainbowDiv.classList.remove('selected');
  whiteDiv.classList.add('selected');
  console.log(black);
  console.log(rainbow);
}

function makeRainbow() {
  rainbow = true;
  whiteDiv.classList.remove('selected');
  blackDiv.classList.remove('selected');
  rainbowDiv.classList.add('selected');
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

makeGrid(25);

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

rainbowDiv.addEventListener('click', makeRainbow);
