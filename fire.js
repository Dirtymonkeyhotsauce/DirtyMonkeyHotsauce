const canvas = document.getElementById("fire");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const embers = [];

function createEmber() {
  embers.push({
    x: Math.random() * w,
    y: h + 20,
    r: Math.random() * 2 + 1,
    vy: Math.random() * -1.5 - 0.5,
    alpha: Math.random() * 0.6 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  embers.forEach((e, i) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,${100 + Math.random()*100},0,${e.alpha})`;
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    e.y += e.vy;
    e.alpha -= 0.002;

    if (e.alpha <= 0) embers.splice(i, 1);
  });

  if (embers.length < 250) createEmber();
  requestAnimationFrame(draw);
}

draw();
