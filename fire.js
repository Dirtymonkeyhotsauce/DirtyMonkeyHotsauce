const canvas = document.getElementById("fire");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let embers = [];

function spawn() {
  embers.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    r: Math.random() * 3 + 1,
    vy: Math.random() * -2.5 - 0.5,
    a: Math.random() * 0.8 + 0.3
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  embers.forEach((e, i) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,${80+Math.random()*120},0,${e.a})`;
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    e.y += e.vy;
    e.a -= 0.004;

    if (e.a <= 0) embers.splice(i, 1);
  });

  if (embers.length < 600) {
    for (let i = 0; i < 4; i++) spawn();
  }

  requestAnimationFrame(draw);
}

draw();
