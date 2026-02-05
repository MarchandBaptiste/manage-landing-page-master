const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider-dots span');
const articles = document.querySelectorAll('.slider article');


function updateDots() {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = articles[0].offsetWidth + 32;
  const activeIndex = Math.round(scrollLeft / slideWidth);
  
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
slider.addEventListener('scroll', updateDots);
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const slideWidth = articles[0].offsetWidth + 32;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  });
});
updateDots();