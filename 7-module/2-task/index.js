import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = createElement (`
    <div class="container">    
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>
  
        <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
  
    </div>
  </div>`);    
  }

  
  open () {    
    this.body = document.querySelector('body');    
    this.body.innerHTML += this.modal.innerHTML; 

    this.setTitle(this.modal_title);    
    this.modalTitle = this.body.querySelector('.modal__title');
    this.modalTitle.textContent = `${this.modal_title}`;

    this.setBody(this.modal_body);
    this.modalBody = this.body.querySelector('.modal__body');    
    this.modalBody.innerHTML = `${this.modal_body.innerHTML}`;

    this.body.classList.add('is-modal-open'); 
         
    document.querySelector('.modal__close').addEventListener('click', this.close);
    
    document.addEventListener('keydown', this.keyClose);
  }

  setTitle (modal_title) {
    this.modal_title = modal_title;
  }

  setBody (node) {    
    this.modal_body = node;
       
  }

  close = (event) => {      
    document.querySelector('.modal__close').removeEventListener('click', this.close); 
    document.removeEventListener('keydown', this.keyClose); 
    this.body.classList.remove('is-modal-open'); 
    let modalTarget = this.body.querySelector('.modal');
    modalTarget.remove();    
  }

  keyClose = (event) => {     
    if (event.code === 'Escape') {
      this.close();   
    }
  }
}
