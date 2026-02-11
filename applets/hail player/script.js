document.addEventListener('keypress', (e) => {
    // Check if it's a letter key
    if (e.key.match(/^[a-zA-Z]$/)) {
    createBurst();
    }
});

function createBurst() {
    // Random position on screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Create 8-15 circles
    const numCircles = Math.floor(Math.random() * 8) + 8;
    
    for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    document.body.appendChild(circle);
    
    // Random angle and distance
    const angle = (Math.PI * 2 * i) / numCircles + (Math.random() - 0.5) * 0.5;
    const distance = Math.random() * 80 + 30; // 30-110px
    
    const targetX = x + Math.cos(angle) * distance;
    const targetY = y + Math.sin(angle) * distance;
    
    // Animate
    anime({
        targets: circle,
        left: targetX,
        top: targetY,
        opacity: [1, 0],
        scale: [1, 0.3],
        duration: 600 + Math.random() * 400,
        easing: 'easeOutQuad',
        complete: () => {
        circle.remove();
        }
    });
    }
}