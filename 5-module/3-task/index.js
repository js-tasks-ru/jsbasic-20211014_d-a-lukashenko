
function initCarousel(event) {
  let carouselInner = document.querySelector('.carousel__inner');
  let slideWidth = carouselInner.offsetWidth;
 
  let slidesCount = 0;
  
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');

  carouselArrowLeft.style.display = 'none';

  carouselArrowLeft.addEventListener('click', () => {
    slidesCount--;
    carouselArrowRight.style.display = '';
    if (slidesCount === 0) {
      carouselArrowLeft.style.display = 'none';
    }
    if (slidesCount < 0) {
      slidesCount = 0;
    }
    carouselInner.style.transform = `translateX(-${slideWidth * slidesCount}px)`;
  });

  carouselArrowRight.addEventListener('click', () => {
    slidesCount++;
    carouselArrowLeft.style.display = '';
    if (slidesCount > 2) {
      carouselArrowRight.style.display = 'none';
    }
    if (slidesCount > 3) {
      slidesCount = 3;      
    }
    carouselInner.style.transform = `translateX(-${slideWidth * slidesCount}px)`;
  });

}
