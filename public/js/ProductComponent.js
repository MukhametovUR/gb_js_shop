export default Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'https://via.placeholder.com/350x400'
        }
    },
    //1 - запускается метод mounted
     mounted(){ 
        //Из главного файла main.js вызываем метод getJson()
         this.$parent.getJson(`/api/products`)
        //url = /api/products - адрес сервера
        //В метод getJson передаем адрес по которому хотим 
        //подконнектиться /api/products
        //в файле server.js есть обработчик app.get
             .then(data => {
                 for (let item of data){
                     this.$data.products.push(item);
                     this.$data.filtered.push(item);
                 }
             });
     },
     methods: {
         filter(userSearch){
             let regexp = new RegExp(userSearch, 'i');
             this.filtered = this.products.filter(el => regexp.test(el.product_name));
         }
     },
     //2-
    template: `
            <div>
                <h2 class="products__title">FETURED ITEMS</h2>
                <p class="products__subtitle">Shop for items based on what we featured in this week</p>
                <div class="products">
                 <product v-for="item of filtered" 
                 :key="item.id_product" 
                 :img="imgProduct"                 
                 :product="item"
                 @add-product="$parent.$refs.cart.addProduct"></product>
                </div>
            </div>
            `
            
 });
 Vue.component('product', {
    props: ['product'],     
    template: `         
    <div class="products__item">
    <div class="products__item-content">
            <div class="products__item-content">
            <img v-bind:src=product.img alt="Some img">
                 <h3 class="products__item-title">{{product.product_name}}</h3>
                 <p class="products__item-text">{{product.product_text}}</p>
                <p class="products__item-price">$ {{product.price}}.00</p>
                 <div class="products__item-overlay"></div>
                     <a class="products__item-btn" @click="$emit('add-product', product)">Add to Cart</a>
             </div>
    </div>
    </div>
     `
 })

 