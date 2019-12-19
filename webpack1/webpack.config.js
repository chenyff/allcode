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
    devServer:{
        //2)  前端模拟数据
        /* before(app){
            app.get('/user',(req,res)=>{
                res.json({name:'桔子999'})
            })
        } */




        //1)重写的方式 把请求代理到 express服务器上
        /* proxy:{
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'/api':''}
            }
        } */
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}