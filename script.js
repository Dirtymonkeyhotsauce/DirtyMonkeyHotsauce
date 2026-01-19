let lastMove = 0;
const isMobile = window.innerWidth < 768;

// 🔥 CURSOR HEAT TRACKING (THROTTLED)
document.addEventListener("mousemove", e => {
  const now = Date.now();
  if (now - lastMove > 30) {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
    lastMove = now;
  }
});

// 💥 CLICK SPARK EXPLOSIONS (MOBILE SAFE)
document.addEventListener("click", e => {
  const sparks = isMobile ? 8 : 18;

  for (let i = 0; i < sparks; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.setProperty("--x", `${Math.random() * 240 - 120}px`);
    spark.style.setProperty("--y", `${Math.random() * -240}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 700);
  }

  document.body.classList.add("hit");
  setTimeout(() => document.body.classList.remove("hit"), 100);
});
