document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".animated-gradient");

  targets.forEach(target => {
    const text = target.textContent.trim();
    const chars = text.split("");
    target.innerHTML = "";
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      target.appendChild(span);
    });
  });
});
