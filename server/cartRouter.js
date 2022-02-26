const express = require('express');//Импортируем модуль express
const fs = require('fs');//Импортируем модуль FileSystem для работы с директориями
const router = express.Router();//Вызываем метод Router,у котрого есть методы: get,post,put,delete
const handler = require('./handler');//Импортируется модуль handler из файла hadler.js

router.get('/', (req, res) => {//Получаем запрос от клиента из файла CartComponent.js
    //который вызывает метод getJson(url) из файла main.js
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        //Считываем ответ по запроса из getJson() CartComponent.js через main.js
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            //Отправляем строку в качестве ответа в файл CartComponent.js
            res.send(data);
        }
    })
});
router.post('/', (req, res) => {
    //Если в файле CartComponent.js вызвали метод postJson 
    //вызываем в handler добавление товара в корзину, функцию action{add: cart.add,..}
    handler(req, res, 'add', 'server/db/userCart.json');
});
router.put('/:id', (req, res) => {//Передаем id из файла CartComponent.js
    //Отвечаем на запрос при помощи обработчика handler
    handler(req, res, 'change', 'server/db/userCart.json');
});
router.delete('/:id', (req, res) => {//Передаем id из файла CartComponent.js
    //Отвечаем на запрос при помощи обработчика handler
    handler(req, res, 'remove', 'server/db/userCart.json');
});

module.exports = router;