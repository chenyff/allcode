//变量的作用域  函数如果不返回东西 小括号后面跟void
/* function zhengXing():void{

} */
//字面量赋值法
/* let arr1:number[] = []
let arr2:number[] = [1,2,3,4,5]
let arr3:Array<string> = ['chen','陈宇飞','马泉营']
let arr4:Array<boolean> = [true,false,false] */
//构造函数赋值法
let arr1:number[] = new Array()
let arr2:number[] = new Array(1,2,3,4,5)
let arr3:Array<string> = new Array('chen','陈宇飞','马泉营')
let arr4:Array<boolean> = new Array(true,false,false)

//元祖
let x :[string,number]
x = ['马泉营',123]