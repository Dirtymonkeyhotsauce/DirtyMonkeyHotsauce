document.addEventListener("mousemove", e => {
  document.body.style.backgroundPosition =
    `${e.clientX / 30}px ${e.clientY / 30}px`;
});
