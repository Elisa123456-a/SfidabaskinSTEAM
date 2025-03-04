const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const player = { x: 100, y: 200, radius: 20, color: "blue" };
const opponent = { x: 400, y: 200, radius: 20, color: "red" };
const ball = { x: 250, y: 200, radius: 10, color: "orange", dx: 2, dy: 2 };

function drawCircle(obj) {
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    ctx.fillStyle = obj.color;
    ctx.fill();
    ctx.closePath();
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(player);
    drawCircle(opponent);
    drawCircle(ball);
    requestAnimationFrame(updateGame);
}

updateGame();
