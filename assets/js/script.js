const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".slider-dots span");
const articles = document.querySelectorAll(".slider article");
const menu = document.querySelector(".menu");
const hamberger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form-example");
const input = document.querySelector("#mail");
const sendBtn = document.querySelector(".sendbtn");

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

function showError(inputElement, message) {
  inputElement.classList.add("error");
  let errorMsg = inputElement.parentElement.querySelector(".error-message");
  if (!errorMsg) {
    errorMsg = document.createElement("span");
    errorMsg.classList.add("error-message");
    inputElement.parentElement.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
}
function removeError(inputElement) {
  inputElement.classList.remove("error");
  const errorMsg = inputElement.parentElement.querySelector(".error-message");
  if (errorMsg) {
    errorMsg.remove();
  }
}
function valid() {
  let isValid = true;
  const email = input.value.trim();
  removeError(input);
  if (!email) {
    showError(input, "Please insert email");
    isValid = false;
    return isValid;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError(input, "Please insert a valid email");
    isValid = false;
  }
  return isValid;
}
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (valid()) {
    input.value = "";
    removeError(input);
  }
});