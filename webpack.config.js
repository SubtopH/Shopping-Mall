const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建一个插件实例
const htmlplugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'//生成在内存中的文件

})

// 因为webpack是基于node.js构建的，所以支持node语法
module.exports = {
    mode:'development' , //development开发环境  production产品环境
    //webpack 4.x约定打包入口文件src=>index.js 
    plugins:[
        htmlplugin
    ],
     module: {
          rules: [
              {test: /\.css$/, use: ['style-loader', 'css-loader']},
              {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},
              {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
              {test: /\.art$/, use: 'art-template-loader'}
  
         ]
     }
      
}
