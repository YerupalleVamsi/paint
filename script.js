let color = "black";
let isDrawing = false;

document.body.addEventListener("mousedown", () => isDrawing = true);
document.body.addEventListener("mouseup", () => isDrawing = false);

function createboard(size) {
  const board = document.querySelector(".board");
  board.innerHTML = "";
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size*size; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.style.width = "100%";
    square.style.height = "100%";

    square.addEventListener("mouseover", colorsquare);
    square.addEventListener("mousedown", colorsquare); // also allow click coloring

    board.appendChild(square);
  }
}

function changesize(input) {
  createboard(Number(input));
}

function colorsquare() {
  if (!isDrawing && event.type === "mouseover") return;
  if (color === 'rainbow') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changecolor(col) {
  color = col;
}
