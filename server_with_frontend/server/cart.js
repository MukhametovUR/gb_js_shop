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

let remove = (cart, req) => {//Функция удалить товар из корзины
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    console.log(find);
    cart.contents.splice(find,1);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove
};