const path = require('path');

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
        test: /.(png|jpg|gif|jpeg)$/,
        // exclude: /(node_modules|bower_components)/,
        use: "file-loader"
      }
    ]
  },
  mode : "production",
  plugins:[]
};