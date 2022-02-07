class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.sumItems();
    }
    _fetchProducts(){
        this.goods = [
        {id: 1, title: 'Notebook',price: 2000, image: './img/notebook.jpg'},
        {id: 2, title: 'Mouse',price: 20, image: './img/mouse.jpg'},
        {id: 3, title: 'Keyboard',price: 200, image:'./img/keyboard.jpg'},
        {id: 4, title: 'Gamepad',price: 50, image: './img/gamepad.jpg'},
        ];
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

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}
class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }
    render(){
            return `<div class="product-item">
            <div class="item-img">
                <img src=${this.image} alt="img">
            </div>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}


let list = new ProductList();