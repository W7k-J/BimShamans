const container = document.querySelector(".networkCanvas");
const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");

// PARAMETRY POCZĄTKOWE
const config = {
  startX: 0.5,  // Pozycja początkowa X (0.0 - 1.0 jako % szerokości)
  startY: 0.5,  // Pozycja początkowa Y (0.0 - 1.0 jako % wysokości)
  allowOutside: false,  // Czy elementy mogą wychodzić poza grafikę?
  maxNodes: 100,  // Maksymalna liczba punktów
  maxDistance: 120,  // Maksymalny dystans linii między punktami
};

// Skalowanie canvas do rozmiaru kontenera
function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// KLASY I OBIEKTY
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.connections = [];
  }
}

// Inicjalizacja sieci
const nodes = [new Node(canvas.width * config.startX, canvas.height * config.startY)];

// Tworzenie nowych połączeń
function generateNodes() {
  while (nodes.length < config.maxNodes) {
    let parent = nodes[Math.floor(Math.random() * nodes.length)];
    let angle = Math.random() * Math.PI * 2;
    let distance = Math.random() * 80 + 20;
    
    let newX = parent.x + Math.cos(angle) * distance;
    let newY = parent.y + Math.sin(angle) * distance;

    // Sprawdzenie, czy węzeł może wyjść poza obszar
    if (!config.allowOutside) {
      if (newX < 0 || newX > canvas.width || newY < 0 || newY > canvas.height) {
        continue; // Pomijamy ten punkt
      }
    }

    let newNode = new Node(newX, newY);
    parent.connections.push(newNode);
    nodes.push(newNode);
  }
}

// Rysowanie połączeń
function drawConnections() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
  ctx.lineWidth = 1;

  nodes.forEach(node => {
    node.connections.forEach(target => {
      let distance = Math.hypot(target.x - node.x, target.y - node.y);
      if (distance < config.maxDistance) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      }
    });
  });
}

// ANIMACJA
function animate() {
  drawConnections();
  requestAnimationFrame(animate);
}

// START 
generateNodes();
animate();