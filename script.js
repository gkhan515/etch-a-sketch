const sketchpad = document.querySelector('.sketchpad');

freshGrid(16);

function freshGrid (dimension) {
  sketchpad.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  for (let i = 0;i < dimension * dimension;i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    sketchpad.appendChild(square);
  }
}
