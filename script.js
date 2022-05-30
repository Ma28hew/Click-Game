let cnv = document.getElementById("theCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 650;

let mouseX, mouseY;
let mouseIsPressed = false;
var target = false;
var target1 = false;
let x = 400;
let y = 200;
let w = 30;
let h = 30;
let x1 = 600;
let y1 = 375;
let Points = 0;
let Miss = 0;
let Letter = "A";
let randNum = 0.02
let keypressed = false;

requestAnimationFrame(draw);

function draw() {

    document.getElementById("Points").innerHTML = Points;
    document.getElementById("Miss").innerHTML = Miss;

    // Draw Canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // DRAW TARGETS
    ctx.fillStyle = "blue"
    ctx.fillRect(x, y, w, h);


    // Change Letter
    ctx.font = "30px Arial";
    ctx.fillStyle = "red"
    ctx.fillText(Letter, x1, y1);




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

// Event Listeners & Haaaaaaaaaaaaaandlers
cnv.addEventListener("mousedown", mousedownHandler);
cnv.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function mousedownHandler() {
    mouseIsPressed = true;
    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
        // Target was clicked  
        x = generateRandomInteger(cnv.width - w)
        y = generateRandomInteger(cnv.height - h)
        Points++
    } else {
        // They missed thet target
        Miss++
    }
}

function keydownHandler(event) {
    if (event.code === "KeyA" && randNum <= 0.1 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyB" && randNum > 0.1 && randNum <= 0.2 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyJ" && randNum > 0.2 && randNum <= 0.3 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyF" && randNum > 0.3 && randNum <= 0.4 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyU" && randNum > 0.4 && randNum <= 0.5 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyE" && randNum > 0.5 && randNum <= 0.6 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyQ" && randNum > 0.6 && randNum < 0.7 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyL" && randNum > 0.7 && randNum <= 0.8 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "Key5" && randNum > 0.8 && randNum <= 0.9 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else if (event.code === "KeyM" && randNum > 0.9 && randNum <= 1 && keypressed === false) {
        x1 = generateRandomInteger(cnv.width - 40)
        y1 = generateRandomInteger(cnv.height)
        if (y1 < 40) {
            y1 = 40
        }
        Points++
        keypressed = true;
    } else {
        Miss++
    }
    console.log(event.code, randNum)
}

function keyupHandler(event) {
    keypressed = false
    randNum = Math.random()
    if (randNum <= 0.1) {
        Letter = "A"
    } else if (randNum > 0.1 && randNum <= 0.2) {
        Letter = "B"
    } else if (randNum > 0.2 && randNum <= 0.3) {
        Letter = "J"
    } else if (randNum > 0.3 && randNum <= 0.4) {
        Letter = "F"
    } else if (randNum > 0.4 && randNum <= 0.5) {
        Letter = "U"
    } else if (randNum > 0.5 && randNum <= 0.6) {
        Letter = "E"
    } else if (randNum > 0.6 && randNum < 0.7) {
        Letter = "Q"
    } else if (randNum > 0.7 && randNum <= 0.8) {
        Letter = "L"
    } else if (randNum > 0.8 && randNum <= 0.9) {
        Letter = "5"
    } else if (randNum > 0.9 && randNum <= 1) {
        Letter = "M"
    }
}


function mouseupHandler() {
    mouseIsPressed = false;
}

// HELPERS
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max + 1)
}