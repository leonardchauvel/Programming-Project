let circleSize = 20; // 
function setup() {
    createCanvas(500, 500); // Create a 500px X 500px canvas
}

function draw() {
    background(255,215,0); // 

    // Circle
    stroke(220,20,60); // 
    fill(220,20,60); // 
    ellipse(width / 2, height / 2, circleSize, circleSize); // 

    // 
    if (mouseIsPressed) {
        circleSize = random(10, 600); // 
    }
}
