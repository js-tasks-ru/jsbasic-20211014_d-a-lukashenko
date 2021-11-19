

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;



    this.render();
  }

  render () {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `
    <div class="container" style="padding: 50px;">
  <!--Корневой элемент слайдера-->
  <div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 40%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 40%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
      <span class="slider__step-active"></span>
      <span></span>
      <span></span>      
      <span></span>
      <span></span>
    </div>
  </div>

</div>
    `;
  }
}
