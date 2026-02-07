const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".slider-dots span");
const articles = document.querySelectorAll(".slider article");
const menu = document.querySelector(".menu");
const hamberger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

hamberger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (menu.classList.contains("active")) {
    hamberger.src = "./assets/images/icon-close.svg";
  } else {
    hamberger.src = "./assets/images/icon-hamburger.svg";
  }
});

function updateDots() {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = articles[0].offsetWidth + 32;
  const activeIndex = Math.round(scrollLeft / slideWidth);

  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
slider.addEventListener("scroll", updateDots);
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const slideWidth = articles[0].offsetWidth + 32;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  });
});
updateDots();
