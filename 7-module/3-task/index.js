

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    console.log(this.value);
    
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
    
    let slider = this.elem.querySelector('.slider');    
    let leftRelative = left / slider.offsetWidth;
    
    let segments = this.steps - 1;
    
    let approximateValue = leftRelative * segments;
    
    let value = Math.round(approximateValue);
    
    let valuePercents = value / segments * 100;
    
    let thumb = this.elem.querySelector('.slider__thumb');

    let progress = this.elem.querySelector('.slider__progress');

    let leftPercents = valuePercents; // Значение в процентах от 0 до 100

    let slider_value = this.elem.querySelector('.slider__value');

    slider_value.textContent = value;

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let active_remove = this.elem.querySelector('.slider__step-active');
    active_remove.classList.toggle('slider__step-active');

    let value_active = 0;
        value_active = ++value;
    let active_slider_add = this.elem.querySelector(`div.slider__steps > span:nth-child(${value_active})`);
        active_slider_add.classList.toggle('slider__step-active');
    

    
    

    new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    });
  }
}
