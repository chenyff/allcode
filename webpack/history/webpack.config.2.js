let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    mode:'production',
    entry:'./src/index.js',   
    output:{
        filename:'bundle.js',  
        path:path.resolve(__dirname,'dist')
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
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    module:{  //模块
        rules:[  //规则  css-loader 解析css中@import这种语法
            //style-loader 他是把css插入到head标签中
            //loader的特点  希望单一  一个loader只做一件事
            //loader的用法  字符串 代表只用一个loader
            //多个loader的话 就用数组  
            //loader的加载顺序 从右向左执行
            //loader 还可以写成对象方式  目的是可以多传参数
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                //可以处理less文件  sass stylus 
                //如果是sass   安装  node-sass  sass-loader
                //如果是stylus  安装  stylus  stylus-loader
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }

        ]
    }
}