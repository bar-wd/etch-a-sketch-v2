'use-strict';

let target;
let mouseDown = false;
const container = document.querySelector('.container');

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
  console.log(mouseDown);
});

// container.addEventListener('mouseup', e => {
//   mouseDown = false;
// });

// container.addEventListener('mouseout', e => {
//   mouseDown = false;
// });

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
  // e.preventDefault();
  target = e.target.classList;
  console.log(mouseDown, 'status');

  // if (mouseDown === false) {
  //   container.removeEventListener('mouseover', mouseOver);

  if (mouseDown === false) {
    return console.log('it is false');
  } else if (target.contains('column')) {
    target.add('black');
    console.log('bug');
  }
}

makeGrid(9);

const column = document.querySelectorAll('.column');

// column.forEach(gridBox => {
//   gridBox.addEventListener('mousedown', e => {
//     e.target.classList.add('black');

//     column.forEach(inner => {
//       inner.addEventListener('mouseover', mouseOver);
//     });
//   });
// });

// window.addEventListener('mouseup', e => {
//   container.removeEventListener('mouseover', mouseOver);
//   console.log('mouse up');
// });

// container.addEventListener('mouseup', e => {
//   container.removeEventListener('mouseover', mouseOver);
//   console.log('contaienr mouseup');
// });

// column.forEach(column => {
//   container.addEventListener('mouseup', e => {
//     container.removeEventListener('mouseover', mouseOver);
//   });
// })
