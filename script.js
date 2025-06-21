
const bg = document.getElementById('bg');
const canvas = document.createElement('canvas');
bg.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gap = 30;
  for (let x = 0; x < canvas.width; x += gap) {
    for (let y = 0; y < canvas.height; y += gap) {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${(x + y + Date.now()/20) % 360}, 100%, 50%)`;
      ctx.fill();
    }
  }
}
function animate() {
  drawGrid();
  requestAnimationFrame(animate);
}
animate();

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.onclick = () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
};
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
