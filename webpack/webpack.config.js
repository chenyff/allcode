let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');
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
    mode:'development',
    entry:'./src/index.js',   
    output:{
        filename:'bundle.js',  
        path:path.resolve(__dirname,'dist'),
        // publicPath:'http://www.fengcaimi.cn' // 加一个这个  每个外部文件前面都会添加这个路径
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
            filename:'css/main.css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    module:{  //模块
        rules:[ 
            {
                test:/\.html$/,
                use:'html-withimg-loader'
            },
            /* {
               test:require.resolve('jquery'),
               use:'expose-loader?$' 
            }, */
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{"legacy":true}],
                            ['@babel/plugin-proposal-class-properties',{"loose":true}],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include:path.resolve(__dirname,'src'),
                exclude:/node_modules/
            }, 
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
            },
            
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // limit:200*1024  //图片小于这个的 都转换为base64
                        limit:1,
                        outputPath:'/img/',
                        // publicPath:'http://www.fengcaimi.cn' //也可以在这加  所有的图片都会有了
                    }
                }
            }

        ]
    }
}