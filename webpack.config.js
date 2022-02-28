const path = require('path');//Подключаем модуль path
const webpack = require('webpack');//Подключаем модуль webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');//Подключаем модуль HtmlWebpackPlugin

module.exports = {
    mode: 'development',
    entry:'./public/js/main.js',//Название главного подключаемого js файла
    output:{
        path: path.resolve(__dirname,'dist'),//Создаемы новую директорию
        filename:'[name].bandle.js',//Название
        publicPath: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Интернет-магазин',
            template: path.resolve(__dirname, './public/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ]
}