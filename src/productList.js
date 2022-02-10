
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductItem{   
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



class ProductList{
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];        
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
                // console.log(data);
                 this.render()
            });
      }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
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
        // this.sumItems(); //Вывод суммы предложенных товаров
        
    }    

    // sumItems(sum){ //Функция для вывода суммы предложенных товаров
    //     sum = this.goods.map(item =>item.price)
    //                         .reduce((a,b) => a+b);        
    //     console.log(`Суммарную стоимость всех товаров ${sum}`)
    //   }

    addItem(){

        
    }

    deleteItem(){

    }

    updateItem(){

    }
}


class BasketList extends ProductList {
    constructor(container = '.basket', goods) {
        super(goods);
        this.container = container; 
        this.showBasket(); 
        this._getBasket()
            .then(data => { //data - объект js
                 this.goods = data.contents;
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

        showBasket() {
            let btn = document.querySelector('.btn-cart');
            let basket = document.querySelector('.basket');    
            btn.addEventListener('click',function() {
                basket.classList.toggle('basket-active');        
            });
    }
}

class BasketItem extends ProductItem {
    constructor(product) {
        super(product_name, price, id_product);
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
     } 
      renderBasket(){
           return `<div class="basket-item">
               <h3 class="basket-title">${this.product_name}</h3>
               <p class="basket-price">${this.price}</p>                
            </div>`
        }
    }

let a = new BasketList();
a._getBasket(() => {
    a.renderBasket();
});


const list = new ProductList();
list._getProducts(() => {
    list.render();
});




