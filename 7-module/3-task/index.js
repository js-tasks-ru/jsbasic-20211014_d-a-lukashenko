

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    
    this.render();

    let slider = this.elem.querySelector('.slider');
    slider.addEventListener('click', this.sliderClick);
  }

  render () {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `
    <!--Корневой элемент слайдера-->
  <div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">${this.value}</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 0%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
      <span class="slider__step-active"></span>
      <span></span>
      <span ></span>
      <span></span>
      <span></span>
    </div>
    `;
  }
  sliderClick = (event) => {    
        
    let left = event.clientX - this.elem.getBoundingClientRect().left; 
    
    let leftRelative = left / this.elem.offsetWidth;
    
    let segments = this.steps - 1;
    
    let approximateValue = leftRelative * segments;
    
    let value = Math.round(approximateValue);
    
    let valuePercents = value / segments * 100;
    
    let thumb = this.elem.querySelector('.slider__thumb');

    let progress = this.elem.querySelector('.slider__progress');

    let leftPercents = valuePercents; // Значение в процентах от 0 до 100

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
  }
}
