document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  const shuffleButton = document.getElementById("shuffle");
  const items = Array.from(document.querySelectorAll(".gallery-item"));

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (shuffleButton) {
    shuffleButton.addEventListener("click", () => {
      const parent = document.querySelector(".image-gallery");
      if (!parent) return;
      const shuffled = items.sort(() => Math.random() - 0.5);
      shuffled.forEach((item) => parent.appendChild(item));
    });
  }
});
