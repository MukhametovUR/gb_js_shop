const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductItem{   
    constructor(product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
      } 
      render(){
            return `<div class="product-item">

                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
            </div>`
    }
}

class basket {
    constructor(container = '.header') {
        this.container = container;
        this.goods = [];
        this._getBasket()
            .then(data => { //data - объект js
                 this.goods.contents = data;
                console.log(data);
                 this.render()
            });
      }
    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });     
        }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }    

}

const list = new basket();
list._getBasket(() => {
    list.render();
});
