document.addEventListener("click", e => {
  for (let i = 0; i < 12; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
    spark.style.setProperty("--y", (Math.random() * -200) + "px");
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 800);
  }
});
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
