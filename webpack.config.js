const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
    mode: "development",

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
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
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]      
   },
    optimization: {
      minimizer: [
        new minify({})
      ],
    },

      

    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
      new miniCss({
        filename: 'style.css',
     }),
     new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/img'),
            to:   path.resolve(__dirname, 'dist/images')
          }
        ]
      })
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      proxy: {
        '/api/v1': 'http://localhost:3000',
      },
    }
}