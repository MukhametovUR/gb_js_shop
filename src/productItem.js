import ProductList from './productList'
export default class ProductItem{   
    constructor(product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
      } 
      render(){
            return `<div class="product-item">
            <div class="item-img">
            </div>
                <img src="./images/images.png">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

// let list = new ProductList();

export  const list = new ProductList();




