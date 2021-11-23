import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.filterAll = {};
    this.cardRender = '';

    this.products.forEach((product) => { 
      this.cardRen(product);
    });
    

    this.render();
          
  }  
  
  cardRen(product) {    
      this.card = new ProductCard(product);
      this.cardRender += this.card.elem.innerHTML;    
  }

  render() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
        ${this.cardRender}
      </div>
    </div>
    `);
  } 
  updateFilter(filters) {
    
    this.filtersAll = Object.assign(this.filters, filters);
    this.elem.remove();
    this.cardRender = '';
    let container = document.getElementById('container');
    

    this.products.forEach((product) => {
    
      //noNuts filter
      if (this.filtersAll.noNuts && !product.nuts) { 
        this.cardRen(product);                 
      }        
      
      //vegeterianOnly filter
      else if (this.filtersAll.vegeterianOnly && product.vegeterian) { 
        this.cardRen(product);                          
      }       
      
      //maxSpiciness filter
      else if (this.filtersAll.maxSpiciness && product.spiciness <= this.filtersAll.maxSpiciness) {
        this.cardRen(product);  
      }    

      //category filter
      else if (this.filtersAll.category && (this.filtersAll.category == product.category)) {  
        this.cardRen(product);     
      } 
            
      //without filters     
      else if (!this.filtersAll.noNuts && !this.filtersAll.vegeterianOnly && !this.filtersAll.category && (!this.filtersAll.maxSpiciness || this.filtersAll.maxSpiciness === 4)) {        
        this.cardRen(product);         
      }
    });
    this.render(); 
    container.append(this.elem);        
  }
}