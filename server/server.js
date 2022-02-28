const express = require('express'); //Импортируем внешний модуль express
const fs = require('fs');           //Импортируем внешний модуль filesystem для работы с файлами json
const app = express();              //Вызываем функцию express app.application
const cart = require('./cartRouter');//обработчик всех запросов корзины для работы с корзиной

app.use(express.json());            //Указываем, что сервер будет работать с json
app.use('/', express.static('dist'));//При открытии главной страницы ищем 
                                    //статический файл из папки public - index.html (Переходим index.html)
app.use('/api/cart', cart);         //Модуль отвечает на запросы клиента cartRouter
                                    //Сервер ждет запрос по этому адресу 
                                    //из файла CartComponent.js


// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/api/products', (req, res) => { // /api/products - адрес сервера
    //Обработка url из файла ProductComponent.js
    //Сервер ждет запрос по адресу url /api/products
    //Готовим ответ на запрос 
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        //Считываетм исходник файла products.json
        //data - исходник файла products.json
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);//Отправим строку json в качестве ответа 
            //в файл main.js метод getJson в then(result.json())
        }
    })
});

// app.get('/api/cart/:id', (req, res) => {
//    // res.send(req.params.id);
//     res.send(req.query);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));