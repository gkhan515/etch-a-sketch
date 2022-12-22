const sketchpad = document.querySelector('.sketchpad');
const clearButton = document.querySelector('.clear');

let dimension = 100;

freshGrid();

clearButton.addEventListener('click', freshGrid);

function freshGrid () {
  let squares = sketchpad.querySelectorAll('.square');
  squares.forEach(s => s.remove());

  sketchpad.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  for (let i = 0;i < dimension * dimension;i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', colorIn);
    sketchpad.appendChild(square);
  }
}

function colorIn () {
  this.style.backgroundColor = 'black';
}
