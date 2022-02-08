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


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductItem{
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
    _fetchProducts(cb){
        makeGETRequest(`${API_URL}/catalogData.json`,(goods) => {
            this.goods = JSON.parse(goods);
            cb();
            console.log(this.goods);
        })
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new ProductItem(good.product_name, good.price);
          listHtml += goodItem.render();
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
  list.render();
});

export default list
