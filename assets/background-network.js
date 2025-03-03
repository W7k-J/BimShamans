const container = document.querySelector(".network-container");
const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paths = [];
const numPaths = 100; // Zwiększona ilość ścieżek
const speed = 2; // Prędkość poruszania się impulsów
let centerX = canvas.width * 0.5; // Środek x
let centerY = canvas.height * 0.5; // Środek y

// Tworzenie losowych ścieżek "procesora"
for (let i = 0; i < numPaths; i++) {
  let angle = Math.random() * Math.PI * 2;
  let maxLength = Math.random() * Math.max(canvas.width, canvas.height);
  let controlPoint = {
    x: centerX + Math.cos(angle) * (maxLength / 2),
    y: centerY + Math.sin(angle) * (maxLength / 2)
  };
  paths.push({ angle, progress: 0, maxLength, controlPoint });
}

// Funkcja rysowania animacji
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(0, 150, 255, 0.5)";
  ctx.lineWidth = 2;

  paths.forEach((path) => {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);

    let newX = centerX + Math.cos(path.angle) * path.progress;
    let newY = centerY + Math.sin(path.angle) * path.progress;

    ctx.quadraticCurveTo(path.controlPoint.x, path.controlPoint.y, newX, newY);
    ctx.stroke();

    // Tworzenie "przepływu energii"
    ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
    ctx.beginPath();
    ctx.arc(newX, newY, 4, 0, Math.PI * 2);
    ctx.fill();

    path.progress += speed;
    if (path.progress > path.maxLength) {
      path.progress = 0;
      path.controlPoint = {
        x: centerX + Math.cos(path.angle) * (path.maxLength / 2),
        y: centerY + Math.sin(path.angle) * (path.maxLength / 2)
      };
    }
  });

  requestAnimationFrame(draw);
}

// Aktualizacja pozycji środka
function updateCenterPosition(xPercent, yPercent) {
  centerX = canvas.width * xPercent;
  centerY = canvas.height * yPercent;
}

// Przykładowe wywołanie funkcji aktualizującej pozycję środka
updateCenterPosition(0.5, 0.5);

draw();