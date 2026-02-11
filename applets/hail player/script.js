const notes = [1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 3, 5, 9, 13, 23, 24, 22, 8,12,16, 9, 5, 5, 15, 13, 11, 6, 3, 0, 2, 7, 16, 15, 13, 20, 18, 15, 14, 23, 24, 22, 8,12,16, 9, 5, 5, 15, 13, 11, 6, 8, 13, 2, 8, 16, 21, 19, 17 ];

var sound = new Howl({
    preload: true,
    src: ['./sounds/notes.mp3'],
    sprite: {
        '0': [0,1200],
        '1': [1200,1200],
        '2': [2400,1200],
        '3': [3600,1200],
        '4': [4800,1200],
        '5': [6000,1200],
        '6': [7200,1200],
        '7': [8400,1200],
        '8': [9600,1200],
        '9': [10800,1200],
        '10': [12000,1200],
        '11': [13200,1200],
        '12': [14400,1200],
        '13': [15600,1200],
        '14': [16800,1200],
        '15': [18000,1200],
        '16': [19200,1200],
        '17': [20400,1200],
        '18': [21600,1200],
        '19': [22800,1200],
        '20': [24000,1200],
        '21': [25200,1200],
        '22': [26400,1200],
        '23': [27600,1200],
        '24': [28800,1200],
    },
});

function createSound(count) {
    console.log(count);
    sound.play(String(count));
}

let counter = 0;
document.addEventListener('keypress', (e) => {
    // Check if it's a letter key
    if (e.key.match(/^[a-zA-Z]$/)) {
    createBurst();
    createSound(notes[counter]);
    counter++;
    if (counter == notes.length) {counter = 0;}
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

