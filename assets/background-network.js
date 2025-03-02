const canvas = document.getElementById("circuitCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paths = [];
const numPaths = 20; // Ilość ścieżek
const speed = 2; // Prędkość poruszania się impulsów

// Tworzenie losowych ścieżek "procesora"
for (let i = 0; i < numPaths; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  paths.push({ x, y, progress: 0 });
}

// Funkcja rysowania animacji
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(0, 150, 255, 0.5)";
  ctx.lineWidth = 2;

  paths.forEach((path) => {
    ctx.beginPath();
    ctx.moveTo(path.x, path.y);

    let newX = path.x + Math.cos(path.progress) * 100;
    let newY = path.y + Math.sin(path.progress) * 100;

    ctx.lineTo(newX, newY);
    ctx.stroke();

    // Tworzenie "przepływu energii"
    ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
    ctx.beginPath();
    ctx.arc(newX, newY, 4, 0, Math.PI * 2);
    ctx.fill();

    path.progress += speed * 0.02;
    if (path.progress > Math.PI * 2) path.progress = 0;
  });

  requestAnimationFrame(draw);
}

draw();
