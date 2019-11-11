"use strict";
//变量的作用域  函数如果不返回东西 小括号后面跟void
/* function zhengXing():void{

} */
//字面量赋值法
/* let arr1:number[] = []
let arr2:number[] = [1,2,3,4,5]
let arr3:Array<string> = ['chen','陈宇飞','马泉营']
let arr4:Array<boolean> = [true,false,false] */
//构造函数赋值法
var arr1 = new Array();
var arr2 = new Array(1, 2, 3, 4, 5);
var arr3 = new Array('chen', '陈宇飞', '马泉营');
var arr4 = new Array(true, false, false);
//元祖
var x;
x = ['马泉营', 123];
