const notes = [1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 3, 5, 9, 13, 23, 24, 22, 8,12,16, 9, 5, 5, 15, 13, 11, 6, 3, 0, 2, 7, 16, 15, 13, 20, 18, 15, 14, 23, 24, 22, 8,12,16, 9, 5, 5, 15, 13, 11, 6, 8, 13, 2, 8, 16, 21, 19, 17 ];
const words = ["1️⃣", "2️⃣", "🎺", "1️⃣", "2️⃣", "🎺", "1️⃣", "2️⃣", "🎺", "🎺", "🔴", "⚪", "🏒", "🥅", "Hail,", "dear", "old", "Ren-", 
               "sse-", 'laer,', "the", "coll-", "ege", "of", "our", "heart", "For", "dear", "old", "Ren-",
               "sse-", 'laer,', "we", 'all', 'must', 'do', 'our', 'part', 'True', 'to', 'old', "Ren-",
               "sse-", 'laer,', "we'll", 'al-', 'ways', 'strive', 'to', 'be', 'Now, ', "dear", "old", "Ren-",
               "sse-", 'laer,', 'hail', 'to', 'be!!!'];

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


let interactionEnabled = false;

window.addEventListener('load', () => {
  const introText = document.getElementById('intro-text');
  
  anime.timeline({
    complete: () => {
      interactionEnabled = true;
      introText.remove();
    }
  })
  .add({
    targets: '#intro-text',
    bottom: ['-100px', '50%'],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#intro-text',
    bottom: '50%',
    opacity: 1,
    duration: 1000,
    easing: 'linear'
  })
  .add({
    targets: '#intro-text',
    bottom: '150%',
    opacity: [1, 0],
    duration: 1500,
    easing: 'easeInExpo'
  });
});

function createSound(count) {
    sound.play(String(count));
}

let counter = 0;
document.addEventListener('keypress', (e) => {
    if (e.key.match(/^[a-zA-Z]$/) && interactionEnabled) {
    createBurst();
    createSound(notes[counter]);
    counter++;
    if (counter == notes.length) {counter = 0;}
    }
});

function createBurst() {
    const margin = 0.15; 
      
    const minX = window.innerWidth * margin;
    const maxX = window.innerWidth * (1 - margin);
    const minY = window.innerHeight * margin;
    const maxY = window.innerHeight * (1 - margin);
      
    const x = minX + Math.random() * (maxX - minX);
    const y = minY + Math.random() * (maxY - minY);


    animatieWord(words[counter], x, y);



    const numCircles = Math.floor(Math.random() * 8) + 8;
    
    for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    document.body.appendChild(circle);
    

    const angle = (Math.PI * 2 * i) / numCircles + (Math.random() - 0.5) * 0.5;
    const distance = Math.random() * 80 + 30;
    
    const targetX = x + Math.cos(angle) * distance;
    const targetY = y + Math.sin(angle) * distance;
    

    anime({
        targets: circle,
        left: targetX,
        top: targetY,
        opacity: [1, 0],
        scale: [1, 0.3],
        duration: 600 + Math.random() * 600,
        easing: 'easeOutQuad',
        complete: () => {
        circle.remove();
        }
    });
    }
}

function animatieWord(word, x, y) {
    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordElement.textContent = word;
    wordElement.style.left = x + 'px';
    wordElement.style.top = y + 'px';
    document.body.appendChild(wordElement);
  
    anime.timeline({
        complete: () => {
            wordElement.remove();
        }
    })
    .add({
        targets: wordElement,
        opacity: [0, 1],
        scale: [0.5, 1.2],
        duration: 400,
        easing: 'easeOutQuad'
    })
    .add({
        targets: wordElement,
        scale: [1.2, 1],
        duration: 200,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: wordElement,
        opacity: [1, 0],
        scale: [1, 0.8],
        duration: 600,
        delay: 200,
        easing: 'easeInQuad'
    });
}

