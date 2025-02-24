const dragCanvas = document.getElementById("dragToastCanvas");
const dragCtx = dragCanvas.getContext("2d");

// Set canvas size
dragCanvas.width = 200;
dragCanvas.height = 200;

// Toast object
const dragToast = { 
    x: 75, 
    y: 75, 
    width: 50, 
    height: 50, 
    color: "#d2691e", 
    dragging: false 
};

// Draw the toast
function drawDragToast() {
    dragCtx.clearRect(0, 0, dragCanvas.width, dragCanvas.height);
    dragCtx.fillStyle = dragToast.color;
    dragCtx.fillRect(dragToast.x, dragToast.y, dragToast.width, dragToast.height);
    requestAnimationFrame(drawDragToast);
}

// Touch event listeners
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

// Start game loop
drawDragToast();
