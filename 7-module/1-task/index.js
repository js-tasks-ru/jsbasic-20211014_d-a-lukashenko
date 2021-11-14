import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  constructor(categories) {
    this.categories = categories;    
    this.categoryRend = '';
    categories.forEach((category) => {
      this.categoryRend += `
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `
    });  
  
    this.render();

    this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', this.leftClick);

    this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', this.rightClick);

    this.elem.querySelector('.ribbon__inner').addEventListener('scroll', this.onInnerScroll);

    let items = this.elem.querySelectorAll('.ribbon__item');
    items.forEach((item) => {
      item.addEventListener('click', this.itemClick);
    });
  }

  render() {
    this.elem = createElement (`
  <div class="ribbon">
  <!--Кнопка прокрутки влево-->
  <button class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>
  <nav class="ribbon__inner">
     ${this.categoryRend}
  </nav>
  <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
  `); 
  }

leftClick = (event) => {
  let ribbonInner = this.elem.querySelector('.ribbon__inner');
  let scrollLeft = ribbonInner.scrollLeft;
  let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
  let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
  
  ribbonInner.scrollBy(-350, 0);

  if (scrollLeft < 180) {
    ribbonArrowLeft.classList.remove('ribbon__arrow_visible');    
  }
    
  if (!ribbonArrowRight.classList.contains('ribbon__arrow_visible')) {
    ribbonArrowRight.classList.add('ribbon__arrow_visible');   
  }  
  
  
};

rightClick = (event) => {
  let ribbonInner = this.elem.querySelector('.ribbon__inner');
  let scrollWidth = ribbonInner.scrollWidth;
  let scrollLeft = ribbonInner.scrollLeft;
  let clientWidth = ribbonInner.clientWidth; 
  let scrollRight = scrollWidth - scrollLeft - clientWidth;
  let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
  let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');

  ribbonInner.scrollBy(350, 0);
 
  if (scrollRight < 1) {
    ribbonArrowRight.classList.remove('ribbon__arrow_visible');
  }
    
  if (!ribbonArrowLeft.classList.contains('ribbon__arrow_visible')) {
    ribbonArrowLeft.classList.add('ribbon__arrow_visible');    
  }
};

onInnerScroll = (event) => {
  let ribbonInner = this.elem.querySelector('.ribbon__inner');
  let scrollWidth = ribbonInner.scrollWidth;
  let scrollLeft = ribbonInner.scrollLeft;
  let clientWidth = ribbonInner.clientWidth; 
  let scrollRight = scrollWidth - scrollLeft - clientWidth;
  let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
  let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');

  if (scrollLeft < 1) {
    ribbonArrowLeft.classList.remove('ribbon__arrow_visible');    
  }
  if (scrollRight < 1) {
    ribbonArrowRight.classList.remove('ribbon__arrow_visible');
  }
}

itemClick = (event) => {

  // stop browser actions by the preventDefault method on event object
  event.preventDefault();
  
  //remove active class from item
  let items = this.elem.querySelectorAll('.ribbon__item');
  items.forEach((item) => {
    if (item.classList.contains('ribbon__item_active')) {
      item.classList.remove('ribbon__item_active');
    }});

  // add an active class to item
  event.target.classList.add('ribbon__item_active');

  // find category
  let category = event.target.closest('[data-id]');   
  
  // make customEvent with category id
  let customEvent = new CustomEvent('ribbon-select', {detail: category.dataset.id, bubbles: true});
  this.elem.dispatchEvent(customEvent);  
}
}
