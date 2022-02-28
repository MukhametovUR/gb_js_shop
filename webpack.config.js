const path = require('path');//Подключаем модуль path
const { VueLoaderPlugin } = require('vue-loader');
const miniCss =  require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');//Подключаем модуль HtmlWebpackPlugin

module.exports = {
    mode: 'development',

    entry:[ './public/js/style.js',
            './public/js/main.js',            
            './public/js/CartComponent.js',
            './public/js/ErrorComp.js',
            './public/js/ProductComponent.js',
        ],//Подключаем скрипты
    
    output:{
        path: path.resolve(__dirname,'dist'),//Создаемы новую директорию
        filename:'[name].bandle.js',//Название исходного файла
    },
    module: {
        rules: 
      [
        {
            test:/\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ]
         },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
      ]
      
   },
   plugins: [
    new HtmlWebpackPlugin({
        template: "./public/template.html"
    }),
    new CopyPlugin({
        patterns: [
            {
              from: path.resolve(__dirname, 'public/img'),
              to:   path.resolve(__dirname, 'dist/img')
            }
          ]
        }),
    new miniCss({
        filename: 'style.css',
        }),
    new VueLoaderPlugin(),
    

]
}