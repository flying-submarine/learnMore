const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: {
    index:'./src/index.js',
    search:'./src/search.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js' // js文件指纹
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
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /.less$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader : "file-loader",
            options : {
                name : "[name]_[hash:8].[ext]"
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
  mode : "production",
  plugins:[
    new MiniCssExtractPlugin({
      filename:"[name]_[contenthash:8].css"
    }),
    new CSSMinimizerWebpackPlugin({
      test : /\.css$/g,
      // cssProcessor: require('cssnano'), //cssnano：css处理器
    })
  ]
};