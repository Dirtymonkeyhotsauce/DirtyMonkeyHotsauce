// 🔥 CURSOR HEAT TRACKING
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// 💥 CLICK SPARK EXPLOSIONS
document.addEventListener("click", e => {
  for (let i = 0; i < 18; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.setProperty("--x", `${Math.random() * 300 - 150}px`);
    spark.style.setProperty("--y", `${Math.random() * -300}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 900);
  }

  // SCREEN HIT
  document.body.classList.add("hit");
  setTimeout(() => document.body.classList.remove("hit"), 120);
});
