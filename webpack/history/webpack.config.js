let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',//模式 默认两种 production development
    entry:'./src/index.js',   //入口文件
    output:{
        filename:'bundle.js',   //打包后的文件名
        path:path.resolve(__dirname,'dist')//必须是一个绝对路径
    },
    devServer:{
        port:3000,
        progress:true,
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
            },
            hash:true
        })
    ]
}