// import $ from 'jquery';
// import $ from 'expose-loader?$!jquery';
//expose-loader  暴露全局的loader
//pre  前面执行的loader  normal 普通的loader 内联loader  后置postloader
//console.log($);
/* console.log('hello 你好啊')
require('./main.css')
require('./small.less')
let username = `陈宇飞`;
let sayhi = ()=>{
    console.log('hi')
} */
//webpack 打包图片
//这种的会报错 找不见图片
/* let image = new Image();
image.src = './other.png';
document.body.appendChild(image) */
import logo from './other.png';
let image = new Image();
image.src = logo;
document.body.appendChild(image)
require('./other.css')