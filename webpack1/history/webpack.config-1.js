let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry:{
        home:'./src/index.js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    //映射文件  源码映射  会单独生成一个 sourcemap文件  出错了会表示 当前报错的行以及列 
    // devtool:'source-map',//会多生成文件
    //devtool:'eval-source-map',//不会生成单独的文件  但是可以显示行和列
    devtool:'cheap-module-eval-source-map',//打包到文件里面  不会生成列
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
    ]
}