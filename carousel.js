const carousel = document.querySelector('.carousel');
const ul = carousel.querySelector('ul');
const lis = carousel.querySelectorAll('li');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= lis.length) {
    currentIndex = 0;
  }
  ul.style.transform = `translateX(-${currentIndex * 100 / lis.length}%)`;
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = lis.length - 1;
  }
  ul.style.transform = `translateX(-${currentIndex * 100 / lis.length}%)`;
});
