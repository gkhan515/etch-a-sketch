const sketchpad = document.querySelector('.sketchpad');
const clearButton = document.querySelector('.clear');
const changeSizeButton = document.querySelector('.change-size');
const randomColorButton = document.querySelector('.random')

let dimension = 100;
let random = 0;

freshGrid();

clearButton.addEventListener('click', freshGrid);
changeSizeButton.addEventListener('click', changeSize);
randomColorButton.addEventListener('click', () => random = !random);

function changeSize () {
  let newSize = prompt("Enter the new size");
  while (!(Number.isInteger(parseInt(newSize))) || newSize < 16 || newSize > 100) {
    newSize = prompt("Enter a number between 16 and 100");
  }
  dimension = newSize;
  freshGrid();
}

function colorIn () {
  if (random)
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  else
    this.style.backgroundColor = 'black';
}

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
