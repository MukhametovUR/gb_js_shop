function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }


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
                console.log(data);
                 this.render()
            });
      }
    // _fetchProducts(cb){
    //     makeGETRequest(`${API}/catalogData.json`,(goods) => {
    //         this.goods = JSON.parse(goods);
    //         cb();
    //     })
    // }
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
    }
    

    sumItems(sum){
        sum = this.goods.map(item =>item.price)
                            .reduce((a,b) => a+b);        
        console.log(`Суммарную стоимость всех товаров ${sum}`)
      }

    addItem(){

    }

    deleteItem(){

    }

    updateItem(){

    }

    
}


// let list = new ProductList();

const list = new ProductList();
list._getProducts(() => {
  list.render();
});

export default list
