const toast = document.getElementById('toast');
const gameArea = document.getElementById('gameArea');

let isJumping = false;
let toastPosition = { x: 270, y: 300 }; // Starting position of the toast
let velocity = 0;
let gravity = 0.5;
let jumpHeight = -12;

function updateToastPosition() {
    if (toastPosition.y < gameArea.clientHeight - toast.clientHeight) {
        // Apply gravity
        velocity += gravity;
        toastPosition.y += velocity;
    } else {
        // Prevent the toast from going below the ground (game area bottom)
        toastPosition.y = gameArea.clientHeight - toast.clientHeight;
    }

    toast.style.left = toastPosition.x + 'px';
    toast.style.top = toastPosition.y + 'px';
}

// Make the toast jump
function jump() {
    if (!isJumping) {
        isJumping = true;
        velocity = jumpHeight;
    }
}

// Add event listener for touch or click to trigger jump
document.addEventListener('touchstart', () => jump());
document.addEventListener('mousedown', () => jump());

// Game loop to keep updating the toast's position
function gameLoop() {
    updateToastPosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();
