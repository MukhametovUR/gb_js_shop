const path = require('path');//Подключаем модуль path
const { VueLoaderPlugin } = require('vue-loader');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');//Подключаем модуль HtmlWebpackPlugin

module.exports = {
    
    mode: 'development',

    entry:  [ 
            './public/js/main.js',            
            ],//Подключаем скрипт
            
    
    output:{
        path: path.resolve(__dirname,'dist'),//Создаемы новую директорию
        filename:'[name].bandle.js',//Название исходного файла
    },
    module: {
        rules: 
      [
        {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            
          },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
      ]      
   },
   optimization: {
    minimizer: [
      new minify({})
    ],
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
            },
            {
                from: path.resolve(__dirname, 'public/css/style.css'),
              to:   path.resolve(__dirname, 'dist')
              },
          ]
        }),
    new miniCss({
            filename: 'style.css',
         }),
    new VueLoaderPlugin(),
    

]
}