import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    
    this.cardRender = '';

    this.render();

    let productsGridInner = this.elem.querySelector('.products-grid__inner');
    
    this.products.forEach((product) => {
      this.card = new ProductCard(product);     
      productsGridInner.append(this.card.elem);

    });

    
    

    
          
  }  
  
  render() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">        
      </div>
    </div>
    `);
  } 

  updateFilter(filters) {    

    this.filtersAll = Object.assign(this.filters, filters);
    this.productsFilter = [];    
    let productsGridInner = this.elem.querySelector('.products-grid__inner');    
    productsGridInner.innerHTML = '';
    

    this.products.forEach((product) => {      
      //noNuts filter
      if (this.filtersAll.noNuts && !product.nuts) {        
        this.productsFilter.push(product);       
      }        
      
      //vegeterianOnly filter
      else if (this.filtersAll.vegeterianOnly && product.vegeterian) {         
        this.productsFilter.push(product);                 
      }       
      
      //maxSpiciness filter
      else if (this.filtersAll.maxSpiciness && product.spiciness <= this.filtersAll.maxSpiciness) {        
        this.productsFilter.push(product);  
      }    

      //category filter
      else if (this.filtersAll.category && (this.filtersAll.category == product.category)) {          
        this.productsFilter.push(product);  
      } 
            
      //without filters     
      else if (!this.filtersAll.noNuts && !this.filtersAll.vegeterianOnly && !this.filtersAll.category && (!this.filtersAll.maxSpiciness || this.filtersAll.maxSpiciness === 4)) {    
        this.productsFilter.push(product);             
      }
    });
     

    this.productsFilter.forEach((product) => {
      this.card = new ProductCard(product);     
      productsGridInner.append(this.card.elem);
    });
}
}