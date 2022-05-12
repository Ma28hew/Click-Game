let cnv = document.getElementById("theCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 650;

let mouseX, mouseY;
let mouseIsPressed = false;
var target = false;
let x = 400;
let y = 200;
let w = 30;
let h = 30;
let Points = 0;
let Miss = 0;

requestAnimationFrame(draw);

function draw() {

    // Game State
    if (mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
        target = true;
        Points++
    } else {
        target = false
    }
    if (target) {
        function generateRandomInteger(max) {
            return Math.floor(Math.random() * max + 1)
        }
        x = generateRandomInteger(cnv.width - w)

        function generateRandomInteger(max) {
            return Math.floor(Math.random() * max + 1)
        }
        y = generateRandomInteger(cnv.height - h)
    }

    document.getElementById("Points").innerHTML = Points;
    document.getElementById("Miss").innerHTML = Miss;

    // Draw Canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Draw Targets
    ctx.fillStyle = "blue"
    ctx.fillRect(x, y, w, h);

    // REQUEST ANIMATION FRAME
    requestAnimationFrame(draw);
}

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}

// Event Listeners & Handlers
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
    mouseIsPressed = true;
    if (mouseIsPressed && mouseX <= x) {
        Miss++
        console.log("miss1")
    }
    if (mouseIsPressed && mouseX > x + w) {
        Miss++
        console.log("miss2")
    }
    if (mouseIsPressed && mouseY <= y && mouseX >= x && mouseX < x + w) {
        Miss++
        console.log("miss3")
    }
    if (mouseIsPressed && mouseY > y + h && mouseX >= x && mouseX < x + w) {
        Miss++
        console.log("miss4")
    }
}

function mouseupHandler() {
    mouseIsPressed = false;
}