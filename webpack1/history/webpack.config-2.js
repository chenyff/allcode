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
    watch:true, //监控是否发生改动
    watchOptions:{
        poll:100,//每秒询问1000次
        aggregateTimeout:500,//防抖  500毫秒之内输入的代码 不会触发重新构建
        ignored:/node_modules/    //不需要进行监控的    
    },
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