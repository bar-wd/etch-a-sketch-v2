'use-strict';

// Make grid first using js

const container = document.querySelector('.container');

function makeGrid(num) {
  let tracker = num;

  while (tracker > 0) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    container.appendChild(newDiv);
    tracker--;
  }
}

makeGrid(5);
