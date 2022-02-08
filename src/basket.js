const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class BasketItem{   
    constructor(product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
      } 
      render(){
            return `<div class="basket-item">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
            </div>`
    }
}

class BasketList {
    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this._getBasket()
            .then(data => { //data - объект js
                 this.goods = data.contents;
                // console.log(data.contents);
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
            const productObj = new BasketItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('afterend', productObj.render());
        }
    }    

}

const listBasket = new BasketList();
listBasket._getBasket(() => {
    listBasket.render();
});


let btn = document.querySelector('.btn-cart');
let basket = document.querySelector('.basket-item');
console.log(btn)
console.log(basket)

btn.addEventListener('click',()=>{
    console.log('click')
});