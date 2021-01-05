
const gridWidth = 100;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

let mouseDown = false;

/***********
 * QUERIES *
 ***********/
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
const brush = document.querySelector(".current-brush").classList;
const eraseButton = document.querySelector(".erase");
const squares = document.querySelectorAll(".square");


/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

function getColor(element) {
  return element.classList[1];
}

function clickedSquare(event) {
  const square = event.target;
  const brush = document.querySelector(".current-brush");
  square.classList.replace(getColor(square), getColor(brush));
  mouseDown = false;
}
const mousedOverSquare = (event) => {
  if (mouseDown) {
    const square = event.target;
    const brush = document.querySelector(".current-brush");
    square.classList.replace(getColor(square), getColor(brush));
  }
};

for (const square of squares) {
  square.addEventListener("mouseenter", mousedOverSquare);
  square.addEventListener("click", clickedSquare);
}

function handleClickPaletteColor(event) {
  const brush = document.querySelector(".current-brush");
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll(".palette-color");

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener("click", handleClickPaletteColor);
}

const eraseAll = () => {
  for (const square of squares) {
    square.classList.replace(square.classList[1], "color-5");
  }
};

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/
// Now: wiring up our event listeners to our html node elements.

// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

eraseButton.addEventListener("click", eraseAll);

document.body.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});
