const { Listener } = require("tone");

function setup() {
    createCanvas(1000, 1000);
  }
  
function draw() {
    background(220, 0, 200);
    line(0, 1000, 1000, 0);
    quad(88, 77, 193, 44, 288, 188, 90, 300);
    circle(200, 500, 100)
    triangle(800, 888, 500, 800, 800, 500)
    arc(575, 140, 150, 150, 0.4, 5.5, PIE);
  }