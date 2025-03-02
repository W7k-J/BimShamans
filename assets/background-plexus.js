const canvas = document.getElementById("plexusCanvas");
const ctx = canvas.getContext("2d");

// Ustawienia Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const maxParticles = 100; // Ilość punktów
const maxDistance = 150; // Maksymalna odległość linii
const mouse = { x: null, y: null, radius: 200 };

// Generowanie punktów
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(0,150,255,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Tworzenie tablicy cząsteczek
function init() {
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }
}

function connect() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.strokeStyle = `rgba(0,150,255,${1 - distance / maxDistance})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

// Rysowanie i animacja
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.move();
    particle.draw();
  });

  connect();
  requestAnimationFrame(animate);
}

// Obsługa zmiany rozmiaru okna
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Obsługa ruchu myszki
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Inicjalizacja
init();
animate();