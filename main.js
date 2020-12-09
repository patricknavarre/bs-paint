/*******************
 * OUR HELPER CODE *
*******************/
/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 50;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

/***********
 * QUERIES *
***********/
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
const brush = document.querySelector('.current-brush').classList
const canvas = document.querySelectorAll('.square')

const color1 = document.querySelector('.color-1')
const color2 = document.querySelector('.color-2')
const color3 = document.querySelector('.color-3')
const color4 = document.querySelector('.color-4')
const color5 = document.querySelector('.color-5')
const color6 = document.querySelector('.color-6')
const color7 = document.querySelector('.color-7')
const color8 = document.querySelector('.color-8')
const color9 = document.querySelector('.color-9')
const color10 = document.querySelector('.color-10')

const eraseButton = document.querySelector('.erase')

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

const changeToColor1 = () => {
  brush.replace(`${brush[1]}`,'color-1')
}
const changeToColor2 = () => {
  brush.replace(`${brush[1]}`,'color-2')
}
const changeToColor3 = () => {
  brush.replace(`${brush[1]}`,'color-3')
}
const changeToColor4 = () => {
  brush.replace(`${brush[1]}`,'color-4')
}
const changeToColor5 = () => {
  brush.replace(`${brush[1]}`,'color-5')
}
const changeToColor6 = () => {
  brush.replace(`${brush[1]}`,'color-6')
}
const changeToColor7 = () => {
  brush.replace(`${brush[1]}`,'color-7')
}
const changeToColor8 = () => {
  brush.replace(`${brush[1]}`,'color-8')
}
const changeToColor9 = () => {
  brush.replace(`${brush[1]}`,'color-9')
}
const changeToColor10 = () => {
  brush.replace(`${brush[1]}`,'color-10')
}


// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

const clickedPixel = (event) => { 
  let squareClicked = event.target;
  squareClicked.classList.replace(squareClicked.classList[1],`${brush[1]}`)
}

for (const pixel of canvas) {
  pixel.addEventListener('click', clickedPixel)
}


const eraseAll = () => { 
  for(const pixel of canvas) {
    pixel.classList.replace(pixel.classList[1], 'color-5')
  }
}

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/
// Now: wiring up our event listeners to our html node elements.

// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
color1.addEventListener('click', changeToColor1)
color2.addEventListener('click', changeToColor2)
color3.addEventListener('click', changeToColor3)
color4.addEventListener('click', changeToColor4)
color5.addEventListener('click', changeToColor5)
color6.addEventListener('click', changeToColor6)
color7.addEventListener('click', changeToColor7)
color8.addEventListener('click', changeToColor8)
color9.addEventListener('click', changeToColor9)
color10.addEventListener('click', changeToColor10)
eraseButton.addEventListener('click', eraseAll)



