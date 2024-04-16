const images = [
  "img/pizza-hero.jpg",
  "img/Pitsa-Gavajska.jpg",
  "img/papperoni.jpg",
];

let currentIndex = 0;
const hero = document.querySelector(".hero");

function changeImage() {
  hero.style.backgroundImage = `linear-gradient(
      to right,
      rgba(232, 232, 246, 0.4),
      rgba(224, 230, 246, 0.4)
    ), url("${images[currentIndex]}")`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000);

// ===========================
// Функція для прокручування сторінки вгору
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавне прокручування
  });
}

// Показуємо або ховаємо кнопку прокрутки вгору в залежності від положення на сторінці
window.onscroll = function () {
  let scrollButton = document.querySelector(".scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
