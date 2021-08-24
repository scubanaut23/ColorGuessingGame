"use strict";

let numBoxes = 6;

let boxes = document.querySelectorAll("#box");

let resetBtn = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");

let rgb = document.querySelector("#rgb");
let comment = document.querySelector("#comment");
let header = document.querySelector(".header");

// Generating a random RGB Color
const colorGenerator = () => {
  // red
  const x = Math.floor(Math.random() * 256);
  // green
  const y = Math.floor(Math.random() * 256);
  // blue
  const z = Math.floor(Math.random() * 256);
  const bgColor = `RGB(${x},${y},${z})`;
  return bgColor;
};

// push the random rgb colors in an array depending of the number of boxes we need
let randomColorsArray = (genColor) => {
  // create array
  let arr = [];
  // repeat  the amount of times of boxes
  for (let i = 0; i < genColor; i++) {
    arr.push(colorGenerator());
  }
  return arr;
};

// save the random colors array in a variable
let colors = randomColorsArray(numBoxes);
// pick one Color from the six
let generatingRandomColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

// for later use save picked color in a variable
let chosenColor = generatingRandomColor();

// Show picked number below the title
rgb.textContent = chosenColor;

// function for changing color in all boxes
let changeColors = (col) => {
  // loop through all boxes
  for (let i = 0; i < boxes.length; i++) {
    // change colors in boxes to the same
    boxes[i].style.backgroundColor = col;
  }
};

// connect randomrgb color with corresponding box by looping over it
for (let i = 0; i < boxes.length; i++) {
  // showing the colors as Backgroundcolors in the box
  boxes[i].style.backgroundColor = colors[i];

  // add clicklistners to the boxes
  // for using the arrow function you need the e.target
  boxes[i].addEventListener("click", (e) => {
    // take the clicked color from the box
    let clickedColor = e.target.style.backgroundColor;
    // replace the blanks between the numbers and sets rgb to uppercase
    let upperClickedColor = clickedColor.replace(/ +/g, "").toUpperCase();

    // compare clicked and chosen Color
    if (chosenColor !== upperClickedColor) {
      e.target.style.backgroundColor = "seashell";
      comment.textContent = "Try Again";
    } else {
      comment.textContent = "Correct!!!";
      resetBtn.textContent = "Play Again?";
      header.style.background = clickedColor;
      changeColors(clickedColor);
    }
  });
}

// Play again Button

// onClick reset the colors and start new game
resetBtn.addEventListener("click", (e) => {
  numBoxes = 6;

  // change buttons back to reset

  easyBtn.style.backgroundColor = "seashell";
  easyBtn.style.color = "black";
  // generate new colors
  colors = randomColorsArray(numBoxes);
  // pick new color
  chosenColor = generatingRandomColor();
  // change color diplay
  rgb.textContent = chosenColor;
  resetBtn.textContent = "New Colors";
  comment.textContent = "";

  // reset header background color
  header.style.backgroundColor = "RGB(28, 97, 124)";

  // show all six numBoxes
  for (let i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
      boxes[i].style.display = "block";
    }
  }
});

// Easy Button

easyBtn.addEventListener("click", (e) => {
  // set number of boxes to three
  numBoxes = 3;
  // change color of button
  easyBtn.style.backgroundColor = "rgb(28, 97, 124)";
  easyBtn.style.color = "seashell";
  hardBtn.style.backgroundColor = "seashell";
  hardBtn.style.color = "black";
  // change array of colors to three
  colors = randomColorsArray(numBoxes);
  // reset winning color
  chosenColor = generatingRandomColor();
  //   reset comments
  comment.textContent = "";
  // show new color in displaying box
  rgb.textContent = chosenColor;
  // reset header background color
  header.style.backgroundColor = "rgb(28, 97, 124)";
  // loop through the arrays and set display to none if bigger than three
  for (let i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});

// Hard Button Button

hardBtn.addEventListener("click", (e) => {
  numBoxes = 6;
  // change button colors
  easyBtn.style.backgroundColor = "seashell";
  easyBtn.style.color = "black";
  hardBtn.style.backgroundColor = "rgb(28, 97, 124)";
  hardBtn.style.color = "seashell";
  // generate new colors
  colors = randomColorsArray(numBoxes);
  // pick new color
  chosenColor = generatingRandomColor();
  // change color diplay
  rgb.textContent = chosenColor;
  // reset the comment
  comment.textContent = "";

  // reset header background color
  header.style.backgroundColor = "rgb(28, 97, 124)";

  // show all six numBoxes
  for (let i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
      boxes[i].style.display = "block";
    }
  }
});
