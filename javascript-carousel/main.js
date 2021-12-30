const cImages = document.querySelector('.c-images');
const leftArrow = document.getElementById('previous');
const rightArrow = document.getElementById('next');
const numImages = document.querySelectorAll('.c-images img').length;
const dotButtons = document.querySelectorAll('.fa-circle');
const dotParent = document.querySelector('.dots-container');
let imagePosition = 1;

leftArrow.addEventListener('click', event => {
  if (imagePosition === 1) {
    imagePosition = numImages;
    cImages.style.transform = `translateX(${(imagePosition - 1) * -20}%)`;
  } else {
    imagePosition--;
    cImages.style.transform = `translateX(${(imagePosition - 1) * -20}%)`;
  }
  setDots();
});

rightArrow.addEventListener('click', event => {
  moveForward();
});

dotButtons.forEach((button, index) => {
  button.addEventListener('click', event => {
    imagePosition = index + 1;
    const selectedDots = document.querySelector('.far.fa-circle.fa-lg.fas');
    selectedDots.classList.remove('fas');
    button.classList.add('fas');
    cImages.style.transform = `translateX(${index * -20}%)`;
  });
});

function moveForward() {
  if (imagePosition === numImages) {
    imagePosition = 1;
    cImages.style.transform = `translateX(${(imagePosition - 1) * -20}%)`;
  } else {
    imagePosition++;
    cImages.style.transform = `translateX(${(imagePosition - 1) * -20}%)`;
  }
  setDots();
}

function setDots() {
  const selectedDots = document.querySelector('.far.fa-circle.fa-lg.fas');
  selectedDots.classList.remove('fas');
  dotParent.children[imagePosition - 1].classList.add('fas');
}

setInterval(moveForward, 3000);
