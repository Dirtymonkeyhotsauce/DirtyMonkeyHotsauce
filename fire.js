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
    y: canvas.height + 30,
    r: Math.random() * 3 + 1,
    vy: Math.random() * -3 - 1,
    a: Math.random() * 0.9 + 0.4
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  embers.forEach((e, i) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,${50+Math.random()*150},0,${e.a})`;
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    e.y += e.vy;
    e.a -= 0.006;
    if (e.a <= 0) embers.splice(i, 1);
  });

  for (let i = 0; i < 8; i++) spawn();

  requestAnimationFrame(draw);
}

draw();
