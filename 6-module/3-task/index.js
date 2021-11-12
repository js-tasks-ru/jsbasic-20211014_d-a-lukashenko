import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.slidesCount = 0; 
    this.slideRend = ``;
    for (let slide of this.slides) {
      this.slideRend += `
      <div class="carousel__slide" data-id=${slide.id}>
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `;
    }

    this.render();

    this.elem.querySelector('.carousel__arrow_left').addEventListener('click', this.leftClick);
    this.elem.querySelector('.carousel__arrow_right').addEventListener('click', this.rightClick);
    let buttons = this.elem.querySelectorAll('.carousel__button');
    for (let button of buttons) {
      button.addEventListener('click', this.buttonClick);
    }
    this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
  }

  render() {

    this.elem = createElement (`
      <!--Корневой элемент карусели-->
      <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
        ${this.slideRend}
      </div>
    </div>`);
  }
  
  leftClick = (event) => {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let slideWidth = carouselInner.offsetWidth;
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    
    this.slidesCount--;
    carouselArrowRight.style.display = '';
    if (this.slidesCount === 0) {
      carouselArrowLeft.style.display = 'none';
    }
    if (this.slidesCount < 0) {
      this.slidesCount = 0;
    }
    carouselInner.style.transform = `translateX(-${slideWidth * this.slidesCount}px)`;
  };
  rightClick = (event) => {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let slideWidth = carouselInner.offsetWidth;
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.slidesCount++;
    carouselArrowLeft.style.display = '';
    if (this.slidesCount > this.slides.length - 2) {
      carouselArrowRight.style.display = 'none';
    }
    if (this.slidesCount > this.slides.length) {
      this.slidesCount = this.slides.length;      
    }
    carouselInner.style.transform = `translateX(-${slideWidth * this.slidesCount}px)`;
  };
  buttonClick = (event) => {
    let slide = event.target.closest('[data-id]'); 
    console.log(slide.dataset.id);   
    let customEvent = new CustomEvent('product-add', {detail: slide.dataset.id, bubbles: true});
    this.elem.dispatchEvent(customEvent);   
    
  }
}


  
  

