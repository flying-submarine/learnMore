const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
        // 注意：执行顺序（从下往上，从右往左，从后往前）
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  require('autoprefixer')({
                    overrideBrowserslist:["ios 7","last 2 version",">1%"]
                  }),
                  // require('postcss-preset-env')
                ]
              }
            }
          },
          {
            loader:"px2rem-loader",
            options:{
              remUnit:75, // 一个rem = 75px
              remPrecision:8 // px转换rem 精确位数

            }
          },
          'less-loader'
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
    new MiniCssExtractPlugin({ // hash配置
      filename:"[name]_[contenthash:8].css"
    }),
    new CSSMinimizerWebpackPlugin({ // css压缩
      test : /\.css$/g,
      // cssProcessor: require('cssnano'), //cssnano：css处理器
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename:"search.html",
      chunks:["search"],
      // bundle：打包最终生成的文件
      // chunk：每个chunk是由多个module组成，可以通过代码分割成多个chunk。
      // module：webpack中的模块（js、css、图片等等）
      inject:true,
      minify:{
        html5:true,
        collapseWhitespace:true,
        preserveLineBreaks:false,
        minifyCSS:true,
        minifyJS:true,
        removeComments:false,
      }
    }),
    new HtmlWebpackPlugin({ // html 压缩
      template: path.join(__dirname, 'src/index.html'),
      filename:"index.html",
      chunks:["index"],
      inject:true,
      minify:{
        html5:true,
        collapseWhitespace:true,
        preserveLineBreaks:false,
        minifyCSS:true,
        minifyJS:true,
        removeComments:false,
      }
    }),
    new CleanWebpackPlugin()
  ]
};