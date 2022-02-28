// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: 'https://placehold.it/50x100',
          showCart: false
      }
    },
    //1-Вызывается метод mounted
    mounted() {
        this.$parent.getJson( `/api/cart` )
            .then( data => {
                for ( let el of data.contents ) {
                    this.cartItems.push( el )
                }
            } );
    },
    methods: {
        addProduct(item){//Метод вызывается из файла CartProduct.js => template
            //обработчик событий add-product
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            //Проверяем, существует ли такой товар
            if(find){
                //Если существует - обновляем его количества
                //Вызываем метод putJson из main.js, укажим адрес /api/cart/
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})  
                //В качестве тела запроса отправим {quantity: 1}
                .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                //Если не существует - добавляем новый товар в корзину
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                 //Вызываем метод postJson из main.js, укажим адрес /api/cart/
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
       remove( product ) {
            if ( product.quantity > 1 ) {
                this.$parent.putJson( `/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: -1 } )
                    .then( data => {
                        if ( data.result ) {
                            product.quantity--;
                        }
                    } )
            } else {
                this.$parent.delJson( `/api/cart/${ product.id_product }/${ product.product_name }`, product )
                    .then( data => {
                        if ( data.result ) {
                            this.cartItems.splice( this.cartItems.indexOf( product ), 1 );
                        } else {
                            console.log( 'error' );
                        }
                    } )
            }
        },
    },
    template: `<div>
                <div class="header__menu-links">
                    <a class="header__menu-btn" href="javascript:void(0);" tabindex="1">
                        <img src="./img/burger.svg" alt="burger">
                    </a>
                    <a class="header__link" href="#">
                        <img src="./img/person.svg" alt="person">
                    </a>
                    <a class="header__link" @click="showCart = !showCart">
                        <img src="./img/track.svg" alt="track">
                    </a>
                </div>
                <div class="cart-block" v-show="showCart">
                    <cart-item v-for="item of cartItems" :key="item.id_product" :img="imgCart" :cart-item="item" @remove="remove">
                    </cart-item>
                </div>
            </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="cart-item">
                    <div class="product-bio">
                    <img v-bind:src=cartItem.img style="width: 100px;" alt="Some img">
                    <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
});
