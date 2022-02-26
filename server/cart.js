let add = (cart, req) => {//Функция добавить товар
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {//Функция изменить количество товаров
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    //Ищем товар в массиве товаров contents в файле userCart.lson
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
    //Переводим объект в строку и передаем в handler.js
};

let remove = (cart, req) => {
    for (let i = 0; i < cart.contents.length; i++) {
        if (cart.contents[i].id_product === +req.params.id) {
            if (cart.contents[i].quantity > 1) {
                cart.contents[i].quantity -= 1;
            }
            if (cart.contents[i].quantity === 1) {
                cart.contents.splice(i,1);
            }
        }
    }
    // find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove
};