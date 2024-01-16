'use-strict';

// Make grid first using js

const container = document.querySelector('.container');

function makeGrid(num) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('new-div');
  container.appendChild(newDiv);
}

makeGrid();
