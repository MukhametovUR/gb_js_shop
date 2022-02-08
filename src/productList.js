import ProductItem from './productItem'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


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

    updateItem(){

    }
}

export default ProductList