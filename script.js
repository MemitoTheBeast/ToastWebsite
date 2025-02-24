const dragCanvas = document.getElementById("dragToastCanvas");
const dragCtx = dragCanvas.getContext("2d");

const jumpCanvas = document.getElementById("jumpToastCanvas");
const jumpCtx = jumpCanvas.getContext("2d");

dragCanvas.width = jumpCanvas.width = 150;
dragCanvas.height = jumpCanvas.height = 200;

// --- Drag Toast Game ---
const dragToast = { x: 50, y: 75, width: 50, height: 50, color: "#d2691e", dragging: false };

function drawDragToast() {
    dragCtx.clearRect(0, 0, dragCanvas.width, dragCanvas.height);
    dragCtx.fillStyle = dragToast.color;
    dragCtx.fillRect(dragToast.x, dragToast.y, dragToast.width, dragToast.height);
    requestAnimationFrame(drawDragToast);
}

dragCanvas.addEventListener("touchstart", (event) => {
    let touch = event.touches[0];
    let rect = dragCanvas.getBoundingClientRect();
    let touchX = touch.clientX - rect.left;
    let touchY = touch.clientY - rect.top;

    if (touchX >= dragToast.x && touchX <= dragToast.x + dragToast.width &&
        touchY >= dragToast.y && touchY <= dragToast.y + dragToast.height) {
        dragToast.dragging = true;
    }
});

dragCanvas.addEventListener("touchmove", (event) => {
    if (dragToast.dragging) {
        let touch = event.touches[0];
        let rect = dragCanvas.getBoundingClientRect();
        dragToast.x = touch.clientX - rect.left - dragToast.width / 2;
        dragToast.y = touch.clientY - rect.top - dragToast.height / 2;
    }
});

dragCanvas.addEventListener("touchend", () => { dragToast.dragging = false; });

drawDragToast();

// --- Jump Toast Game ---
const jumpToast = { x: 50, y: 150, width: 50, height: 50, color: "#d2691e", velocityY: 0, gravity: 0.5, jumpPower: -8 };

function drawJumpToast() {
    jumpCtx.clearRect(0, 0, jumpCanvas.width, jumpCanvas.height);
    jumpCtx.fillStyle = jumpToast.color;
    jumpCtx.fillRect(jumpToast.x, jumpToast.y, jumpToast.width, jumpToast.height);

    jumpToast.velocityY += jumpToast.gravity;
    jumpToast.y += jumpToast.velocityY;

    if (jumpToast.y > 150) {
        jumpToast.y = 150;
        jumpToast.velocityY = 0;
    }

    requestAnimationFrame(drawJumpToast);
}

jumpCanvas.addEventListener("click", () => {
    if (jumpToast.y === 150) {
        jumpToast.velocityY = jumpToast.jumpPower;
    }
});

drawJumpToast();
