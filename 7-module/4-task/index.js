import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;

    this.render();

    this.addEventListeners();

    this.setValuePointer(value);
    this.setValueClick(value);
    
  }

  render () {
    this.elem = createElement(`
    <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
  }

  setValuePointer(value, newLeftPercents) {

    this.value = value;   

    this.sub('thumb').style.left = `${newLeftPercents}%`;
    this.sub('progress').style.width = `${newLeftPercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }
  
  setValueClick(value) {

    this.value = value;

    let valuePercents = (this.value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  addEventListeners() {

    this.elem.addEventListener('click', this.onClick);

    this.sub('thumb').addEventListener('pointerdown', this.onPointerDown);
       
  }
  onClick = event => {
  
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValueClick(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }
  
  onPointerDown = event => {

    event.preventDefault();

    this.elem.classList.add('slider_dragging');

    let onPointerMove = (event) => {  
      
      this.sub('thumb').ondragstart = () => 'false';
      this.sub('thumb').pointerdown = () => 'false';
      this.sub('thumb').pointerup = () => 'false';
      

      let newLeft = event.clientX - this.elem.getBoundingClientRect().left;
      let newLeftRelative = (newLeft / this.elem.offsetWidth);
      if (newLeftRelative < 0) {
        newLeftRelative = 0;        
      }      
      if (newLeftRelative > 1) {
        newLeftRelative = 1;        
      }           
      this.setValuePointer(Math.round(newLeftRelative * this.segments), Math.round(newLeftRelative * 100));
    };

    let onPointerUp = () => {
      this.elem.classList.remove('slider_dragging');
      document.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('pointermove', onPointerMove);

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        })
      );     
    };

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);   
   
  }

      

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

}