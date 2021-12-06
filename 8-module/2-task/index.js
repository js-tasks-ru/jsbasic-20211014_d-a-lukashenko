import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
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
    this.filters = Object.assign(this.filters, filters);
    this.productsFilter = [];   
    let productsGridInner = this.elem.querySelector('.products-grid__inner');   
    productsGridInner.innerHTML = '';
    for (let product of this.products) {
      //noNuts filter
      if (this.filters.noNuts && product.nuts) {
        continue;
      }
      //vegeterianOnly filter
      if (this.filters.vegeterianOnly && !product.vegeterian) {
        continue;
      }
      //maxSpiciness filter
      if (this.filters.maxSpiciness !== undefined && product.spiciness > this.filters.maxSpiciness) {
        continue;
      }
      //category filter
      if (this.filters.category && product.category != this.filters.category) {
        continue;
      }
      this.productsFilter.push(product);    
    }
    this.productsFilter.forEach((product) => {
      this.card = new ProductCard(product);    
      productsGridInner.append(this.card.elem);
    });
}
}