const sketchpad = document.querySelector('.sketchpad');

freshGrid(100);

function freshGrid (dimension) {
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
