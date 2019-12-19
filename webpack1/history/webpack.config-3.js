let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');
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
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'haha.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([   //拷贝插件
            {from:'doc',to:'./'}
        ]),
        new webpack.BannerPlugin('make 2019 by cyf')
    ]
}