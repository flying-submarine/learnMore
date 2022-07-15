const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  entry: {
    index:'./src/index.js',
    search:'./src/search.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      },
      {
        test: /.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /.less$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader : "url-loader",
            options : {
                limit : 10240
              }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        // exclude: /(node_modules|bower_components)/,
        use: "file-loader"
      }
    ]
  },
  mode : "development",
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer:{
    static: './dist',
    // contentBase : "./dist",
    hot:true
  }
};