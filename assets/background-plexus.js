const container = document.querySelector(".plexus-container");
const canvas = document.getElementById("plexusCanvas");
const ctx = canvas.getContext("2d");

// Animation parameters
const particles = [];
const maxParticles = 80;
const maxDistance = 120;
const maxDistanceSquared = maxDistance * maxDistance;
const cellSize = maxDistance;
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
    const root = document.documentElement || document.body;
    if (!root) {
        return 'light';
    }
    return root.classList.contains('dark-theme') ? 'dark' : 'light';
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
    const grid = new Map();

    // Spatial hash reduces neighbor checks to nearby cells only
    particles.forEach(function(particle, index) {
        const cellX = Math.floor(particle.x / cellSize);
        const cellY = Math.floor(particle.y / cellSize);
        const key = `${cellX}:${cellY}`;
        let bucket = grid.get(key);
        if (!bucket) {
            bucket = [];
            grid.set(key, bucket);
        }
        bucket.push(index);
    });

    for (let i = 0; i < particles.length; i++) {
        const baseParticle = particles[i];
        const cellX = Math.floor(baseParticle.x / cellSize);
        const cellY = Math.floor(baseParticle.y / cellSize);

        for (let offsetX = -1; offsetX <= 1; offsetX++) {
            for (let offsetY = -1; offsetY <= 1; offsetY++) {
                const neighborKey = `${cellX + offsetX}:${cellY + offsetY}`;
                const bucket = grid.get(neighborKey);
                if (!bucket) {
                    continue;
                }

                for (let j = 0; j < bucket.length; j++) {
                    const neighborIndex = bucket[j];
                    if (neighborIndex <= i) {
                        continue;
                    }

                    const neighbor = particles[neighborIndex];
                    const dx = baseParticle.x - neighbor.x;
                    const dy = baseParticle.y - neighbor.y;
                    const distanceSq = dx * dx + dy * dy;

                    if (distanceSq < maxDistanceSquared) {
                        const distance = Math.sqrt(distanceSq);
                        ctx.strokeStyle = `${themeColors[currentTheme].connection}${1 - distance / maxDistance})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(baseParticle.x, baseParticle.y);
                        ctx.lineTo(neighbor.x, neighbor.y);
                        ctx.stroke();
                    }
                }
            }
        }
    }
}

// Animation loop with FPS limiting
let lastFrameTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;
let animationFrameId = null;

// Performance monitoring
let frameCount = 0;
let lastFpsCheck = performance.now();
let currentFPS = targetFPS;

function animate(currentTime) {
    // Throttle to target FPS
    const elapsed = currentTime - lastFrameTime;
    
    if (elapsed < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
    }
    
    // Adjust for actual frame interval
    lastFrameTime = currentTime - (elapsed % frameInterval);
    
    // Performance monitoring - reduce quality if FPS drops
    frameCount++;
    if (currentTime - lastFpsCheck >= 1000) {
        currentFPS = frameCount;
        frameCount = 0;
        lastFpsCheck = currentTime;
        
        // Adaptive quality: reduce particle count if FPS drops below 30
        if (currentFPS < 30 && particles.length > maxParticles * 0.5) {
            particles.length = Math.floor(particles.length * 0.9);
        }
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    
    connect();
    animationFrameId = requestAnimationFrame(animate);
}

// Cleanup function
function cleanup() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}

// Pause animation when page is hidden
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        cleanup();
    } else {
        animate(performance.now());
    }
});

window.addEventListener('beforeunload', cleanup);

// Start animation
init();
animate(performance.now());