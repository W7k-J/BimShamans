const container = document.querySelector(".network-container");
const canvas = document.getElementById("networkCanvas");

if (!canvas || !container) {
    return;
}

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// PLACEHOLDER3 
draw();