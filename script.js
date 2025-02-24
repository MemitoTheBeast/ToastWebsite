const toast = document.getElementById('toast');
const gameArea = document.getElementById('gameArea');

let isDragging = false;
let offsetX, offsetY;
let toastPosition = { x: 270, y: 160 }; // Starting position of the toast

// Start dragging
toast.addEventListener('touchstart', (e) => startDrag(e), { passive: false });
toast.addEventListener('mousedown', (e) => startDrag(e));

function startDrag(e) {
    e.preventDefault();
    isDragging = true;
    const touch = e.touches ? e.touches[0] : e; // Handle both touch and mouse events
    offsetX = touch.clientX - toastPosition.x;
    offsetY = touch.clientY - toastPosition.y;

    // Move toast during drag
    document.addEventListener('touchmove', (e) => dragToast(e), { passive: false });
    document.addEventListener('mousemove', (e) => dragToast(e));
}

// Drag the toast
function dragToast(e) {
    if (!isDragging) return;

    const touch = e.touches ? e.touches[0] : e;
    toastPosition.x = touch.clientX - offsetX;
    toastPosition.y = touch.clientY - offsetY;

    updateToastPosition();
}

// Stop dragging
document.addEventListener('touchend', stopDrag);
document.addEventListener('mouseup', stopDrag);

function stopDrag() {
    isDragging = false;
    toast.style.transition = 'top 0.3s, left 0.3s'; // Add smooth transition
    setTimeout(() => {
        toast.style.transition = ''; // Remove the transition after it falls
    }, 300);

    // Let the toast fall down
    toastPosition.y = gameArea.clientHeight - toast.clientHeight; // Fall to the bottom of the game area
    updateToastPosition();
}

// Update toast's position
function updateToastPosition() {
    if (toastPosition.x < 0) toastPosition.x = 0;
    if (toastPosition.x > gameArea.clientWidth - toast.clientWidth) {
        toastPosition.x = gameArea.clientWidth - toast.clientWidth;
    }

    toast.style.left = toastPosition.x + 'px';
    toast.style.top = toastPosition.y + 'px';
}
