const container = document.querySelector(".plexus-container");
const canvas = document.getElementById("plexusCanvas");
const ctx = canvas.getContext("2d");

// Animation parameters
const particles = [];
const maxParticles = 80;
const maxDistance = 120;
const particleSpeed = 0.8; // Speed control variable

// Theme colors
const themeColors = {
    light: {
        particle: "rgba(30, 105, 145, 0.8)",
        connection: "rgba(30, 105, 145, "
    },
    dark: {
        particle: "rgba(0, 255, 255, 0.8)",
        connection: "rgba(0, 255, 255, "
    }
};

// Get current theme
function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

// Resize canvas
function resizeCanvas() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 2 - 1) * particleSpeed;
        this.speedY = (Math.random() * 2 - 1) * particleSpeed;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        const currentTheme = getCurrentTheme();
        ctx.fillStyle = themeColors[currentTheme].particle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
function init() {
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
}

// Connect particles with lines
function connect() {
    const currentTheme = getCurrentTheme();
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.strokeStyle = `${themeColors[currentTheme].connection}${1 - distance/maxDistance})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    
    connect();
    requestAnimationFrame(animate);
}

// Start animation
init();
animate();