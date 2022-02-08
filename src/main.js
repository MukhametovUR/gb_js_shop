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
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
      } 
    renderItem(){
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
    constructor() {
        this.goods = [];
      }
    _fetchProducts(cb){
        makeGETRequest(`${API}/catalogData.json`,(goods) => {
            this.goods = JSON.parse(goods);
            cb();
            console.log(goods);
        })
    }
    renderProducts() {
        let listHtml = '';
        this.goods.forEach(good => {
        console.log(good.product_name, good.price);
          const goodItem = new ProductItem(good.product_name, good.price);
          listHtml += goodItem.renderItem();
        });
        document.querySelector('.products').innerHTML = listHtml;
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
list._fetchProducts(() => {
  list.renderProducts();
});

export default list
