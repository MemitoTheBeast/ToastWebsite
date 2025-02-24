const canvas = document.getElementById("toastCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

const toast = {
    x: 130,
    y: 150,
    width: 40,
    height: 40,
    color: "#d2691e",
    velocityY: 0,
    gravity: 0.5,
    jumpPower: -8
};

function drawToast() {
    ctx.fillStyle = toast.color;
    ctx.fillRect(toast.x, toast.y, toast.width, toast.height);
}

function updateToast() {
    toast.velocityY += toast.gravity;
    toast.y += toast.velocityY;

    if (toast.y > 150) {
        toast.y = 150;
        toast.velocityY = 0;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawToast();
    updateToast();
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener("click", () => {
    if (toast.y === 150) {
        toast.velocityY = toast.jumpPower;
    }
});

gameLoop();
