const cart = require('./cart');
const fs = require('fs');

const actions = {//Объект
    add: cart.add,//Функция добавить товар
    change: cart.change,//Функция обновть товар
    remove: cart.remove//Функция удалить товар
};
//HANDLER отвечает за изменение данных в самом файле
let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data)=> {
        //Считываем данный из файла
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            //Если ошибок нет, обращаемся к объекту actions
            let newCart = actions[action](JSON.parse(data), req);
            //Принимаем новый объект data из файла handler.js и записываем в newCart
            //data - файл с корзиной userCart.json, который преобразуем в объект
            fs.writeFile(file, newCart, (err) => {
                if(err){
                    res.sendStatus(404, JSON.stringify({result:0, text: err}));
                } else {
                    res.send(JSON.stringify({result: 1}))
                }
            })
        }
    })
};

module.exports = handler;