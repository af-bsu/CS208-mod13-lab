let canvas, context;
const flakeSize = 5;

addEventListener("DOMContentLoaded", function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    drawGround();
    drawSnowText();
    drawSnowman();
    drawSnowflakes();
});

function drawGround() {
    // Fill sky across whole canvas so no worries about perfect fit
    context.fillStyle = "#ccc"; // Light gray
    context.fillRect(0,0,300,300);

    // (Approximately) bottom third
    context.fillStyle = "#836539"; // "Dirt brown"
    context.fillRect(0,225,300,300);
}

function drawSnowText() {
    context.font = "80px Verdana";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillStyle = "blue";

    // canvas.width / 2 is the center of the canvas, 10 is the pixels
    // between the text and the ceiling of the canvas. I hate magic numbers
    context.fillText("SNOW", canvas.width / 2, 10);
};

function drawSnowman() {
    context.fillStyle = "white";

    // I hate magic numbers!!!!
    // Base snowman piece
    context.beginPath();
    context.arc(150, 200, 50, 0, Math.PI * 2);
    context.fill();

    // Middle snowman piece
    context.beginPath();
    context.arc(150, 120, 40, 0, Math.PI * 2);
    context.fill();

    // Head snowman piece
    context.beginPath();
    context.arc(150, 60, 25, 0, Math.PI * 2);
    context.fill();
}

function drawSnowflakes() {
    // Math.random() returns a random number between 0 and 1, so
    // multiplying its return value by 300 gives the range 0 - 300
    for (let i = 0; i < 100; i++) {
        drawSingleFlake(Math.random() * 300, Math.random() * 300);
    }
}

function drawSingleFlake(x, y) {
    context.beginPath();
    context.fillStyle = "eee"; // Very very very light gray...
    context.moveTo(x, y);
    context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
    context.lineTo(x, y + flakeSize);
    context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
    context.fill();
}