document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".super-gradient");
  if (target) {
    const text = target.textContent.trim();
    const chars = text.split("");
    target.innerHTML = "";
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      target.appendChild(span);
    });
  }
});
