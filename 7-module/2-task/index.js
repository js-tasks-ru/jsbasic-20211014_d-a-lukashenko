import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = createElement (`   
       
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
    this.body.append(this.modal);
    this.body.classList.add('is-modal-open');

    // let button = this.body.querySelector('.button');
    // button.outerHTML = `<button class='button' style="background: white; color: black;padding: 10px">
    // Нажми меня, чтобы открыть модальное окно
    // </button>`;
    

    
    document.addEventListener('keydown', this.keyClose);
    
    document.querySelector('.modal__close').addEventListener('click', this.close);

    
    
  }

  setTitle (modal_title) {
    this.modal_title = modal_title;

    let title = this.modal.querySelector('.modal__title');
    if (title) {
      title.textContent = modal_title;      
    }
  }

  setBody (node) {    
    let modalBody = this.modal.querySelector('.modal__body');    
    if (modalBody) {      
      modalBody.innerHTML = '';      
      modalBody.append(node);     
    }           
  }

  close = () => {  
    document.removeEventListener('keydown', this.keyClose); 
    this.body.classList.remove('is-modal-open'); 
    let modalTarget = this.body.querySelector('.modal');
    if (modalTarget) {
      modalTarget.remove();
    }    
    // let button = this.body.querySelector('.button');
    // button.outerHTML = `<button class='button' onclick="openModal()" style="background: white; color: black;padding: 10px">
    // Нажми меня, чтобы открыть модальное окно
    // </button>`;
  }

  keyClose = (event) => { 
        
    if (event.code === 'Escape') {
      this.close();   
    }   
  }
}
