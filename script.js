const size = 5;
const winLength = 5;
const boardElem = document.getElementById('board');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
let board = Array(size * size).fill('');
let currentPlayer = '❌';
let gameActive = true;
for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  cell.addEventListener('click', handleCellClick);
  boardElem.appendChild(cell);
}

function handleCellClick(e) {
  if (!gameActive) return;
  if (currentPlayer!== '❌') return;
  const index = +e.target.dataset.index;
  if (board[index]!== '') return;
  makeMove(index);
  if (!gameActive) return;
  setTimeout(computerMove, 450);
}

function makeMove(index) {
  board[index] = currentPlayer;
  boardElem.querySelector(`[data-index='${index}']`).textContent = currentPlayer;
  if (checkWin(index)) {
    message.textContent = `Winner! ${currentPlayer}`;
    gameActive = false;
    return;
    ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffff';
  }
  
  if (!board.includes('')) {
    message.textContent = 'Game over';
    gameActive = false;
    return;
    ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffff';
  }

  currentPlayer = currentPlayer === '❌'? '⭕️': '❌'
  message.textContent = `Player's turn: ${currentPlayer}`;
}

function computerMove() {
  if (!gameActive || currentPlayer!== '⭕️') return;
  const freeCells = board.map((val, idx) => (val === ''? idx: null)).filter(idx => idx!== null);
  if (freeCells.length === 0) return;
  const randomIndex = freeCells[Math.floor(Math.random() * freeCells.length)];
  makeMove(randomIndex);
}

function checkWin(index) {
  const row = Math.floor(index / size);
  const col = index % size;
  return (
    countInDirection(row, col, 0, 1) + countInDirection(row, col, 0, -1) - 1 >= winLength ||
    countInDirection(row, col, 1, 0) + countInDirection(row, col, -1, 0) - 1 >= winLength ||
    countInDirection(row, col, 1, 1) + countInDirection(row, col, -1, -1) - 1 >= winLength ||
    countInDirection(row, col, 1, -1) + countInDirection(row, col, -1, 1) - 1 >= winLength
  );
  ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffff';
}

function countInDirection(row, col, deltaRow, deltaCol) {
  let count = 0;
  let r = row;
  let c = col;
  while (
    r >= 0 &&
    r < size &&
    c >= 0 &&
    c < size &&
    board[r * size + c] === currentPlayer
  ) {
    count++;
    r += deltaRow;
    c += deltaCol;
  }
  return count;
  ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffff';
}

restartBtn.addEventListener('click', () => {
  board.fill('');
  currentPlayer = '❌';
  gameActive = true;
  message.textContent = `Player's turn: ${currentPlayer}`;
  boardElem.querySelectorAll('.cell').forEach(cell => (cell.textContent = ''));
});
message.textContent = `Player's turn: ${currentPlayer}`;
    function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const container = document.getElementById('matrixRain');
    if (!container) return;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&'
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px KenTopDeveloper, monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 30);
    window.addEventListener('resize', () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    });
}

function addGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (!glitchElement) return;
    setInterval(() => {
        if (Math.random() > 10) {
            glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00ff,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff,
                0 0 10px var(--neon-cyan),
                0 0 20px var(--neon-cyan)
            `;
            setTimeout(() => {
                glitchElement.style.textShadow = `
                    0 0 10px var(--neon-cyan),
                    0 0 20px var(--neon-cyan),
                    0 0 40px var(--neon-cyan),
                    0 0 80px var(--neon-cyan)
                `;
            }, 100);
        }
    }, 200);
}

function typewriterEffect() {
    const features = document.querySelectorAll('.feature-line');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.animation = 'fadeIn 0.5s ease-in';
        }, index * 200);
    });
}

function parallaxScroll() {
}
function neonFlicker() {
    const neonElements = document.querySelectorAll('.glitch, .section-title, .btn');
    setInterval(() => {
        neonElements.forEach(element => {
            if (Math.random() > 0.98) {
                element.style.opacity = '0.8';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        });
    }, 100);
}

function createCursorTrail() {
    const trail = [];
    const trailLength = 5;
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '10000';
        dot.style.opacity = '0.6';
        dot.style.boxShadow = `0 0 10px ${dot.style.backgroundColor}`;
        document.body.appendChild(dot);
        trail.push(dot);
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.remove();
        }
        setTimeout(() => {
            dot.style.transition = 'opacity 0.1s';
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 500);
        }, 100);
    });
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
        
    }, { threshold: 0.1 });
    document.querySelectorAll('.demo-block, .use-case').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function konamiCode() {
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiSequence[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiSequence.length) {
                activateMatrixMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateMatrixMode() {
    document.body.style.animation = 'hueRotate 5s infinite';
    document.head.appendChild(style);
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    addGlitchEffect();
    typewriterEffect();
    neonFlicker();
    createCursorTrail();
    animateOnScroll();
    konamiCode();
    window.addEventListener('scroll', () => {
        requestAnimationFrame(parallaxScroll);
    });
});
;(function(){
var icon = '<svg class="sg" xmlns="http://w3.org/2000/svg" viewBox="0 0 185.31 251.89"><path d="M66.8,144.17c0-66.24,22.46-113.9,80.72-112.32,81.48,1.7,80.72,46.8,80.72,112.32,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.8-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68&& C61.47,146.7,66.8,149.7,66.8,144.17Z" transform="translate(-56.6 -25.84)" style="fill:#ffdfbf;fill-rule:evenodd"/><path d="M147.52,31.85C99.49,31.22,75.79,63,69,111.24c8.78-23.84,27.86-26,64.33-26.54,70.62-1.13,88.39,8.27,79.64,96.55-1.84,18.6-6.1,24.62-28.36,39.74-12.7,8.2,18.54-26.37-49.78-27-49.5-.43-30.6,36.41-40.6,29.44a81.88,81.88,0,0,1-20.28-20.73c12.89,40.76,40.76,69,73.8,69,37.3,0,68.69-37.59,77.95-88.67l2.77-38.89C228.24,77.93,229,32.91,147.52,31.85Z" transform="translate(-56.6 -25.84)" style="fill:#d0b57b;fill-rule:evenodd"/><path d="M146.13,31.84h1.39c81.48,1.7,80.72,46.8,80.72,112.33,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.8-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68-1.34-16.39,4-13.39,4-18.29,0-65.71,22.11-112.33,79.33-112.33m0-6h0c-29.39,0-51.65,11.54-66.18,34.3C67.3,80,60.86,108.6,60.8,143.68h0c-2.54,3.5-4.94,7-4,19.12.4,12.11,2.72,16.46,6.59,19.86,9.65,56,44.19,95.7,84.11,95.7,19.91,0,38.59-9.42,54-27.25,14.35-16.57,24.87-39.79,29.66-65.45l0,0c4.22-2.57,8.87-6.53,10.58-21.1l0-.2v-.2c.58-11.55-3.35-16.18-7.7-19.61l-.53-.5v-1c0-33,0-61.46-10.76-82.11-12-23-36.9-33.89-75.88-34.41Z" transform="translate(-56.6 -25.84)" style="fill:#303030"/><path d="M118.31,183.29s4.28,4.28,12.84,4S143.67,182,143.67,182s-3.62,8.23-11.53,8.89S118.31,183.29,118.31,183.29Z" transform="translate(-56.6 -25.84)" style="fill:#bfa78f;fill-rule:evenodd"/><ellipse cx="44.24" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><ellipse cx="104.54" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><circle class="eye" id="eye-left" cx="35.9" cy="121.66" r="10.5" style="fill:#303030"/><circle class="eye" cx="94.57" cy="121.66" r="10.5" style="fill:#303030"/><path d="M140.74,236.63h0c-16.92,0-29.43-4.38-29.43-18.42h0c0-4.22,4.12-7.64,9.21-7.64H160c3.6,0,6.53,2.42,6.53,5.42v7.23C166.55,234.48,154.32,236.63,140.74,236.63Z" transform="translate(-56.6 -25.84)" style="fill:#2d251d;fill-rule:evenodd"/><path d="M160,210.57h-39.5c-5.9,0-9.21,3.42-9.21,7.64,0,.7,0,.15,0,.22,7.57,2.29,17.6,3.2,29,3.2h0c9.87,0,19.24-.52,26.25-2.36V216C166.55,213,163.62,210.57,160,210.57Z" transform="translate(-56.6 -25.84)" style="fill:#fff"/></svg>';
	document.head.insertAdjacentHTML('beforeend','<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.2s ease; transition: -webkit-transform 0.2s ease; transition: transform 0.2s ease; transition: transform 0.2s ease, -webkit-transform 0.2s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>');
	var a = document.createElement('a');
	a.setAttribute('href','http://KenDevel0per.github.io/');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
 	document.body.appendChild(a);
})();
