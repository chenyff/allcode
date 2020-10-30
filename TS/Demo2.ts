const count : number  = 123;

interface litterBoy {
    uname:string,
    age:number
}
const xiaoming : litterBoy = {
    uname:'王小明',
    age:29
}


const xiaojie:{
    name:string,
    age:number
} = {
    name:'小结',
    age:18
}
const jobs : string [] = ['前端','java','测试']

class Person{}
const dajiao : Person = new Person();

const sayAge : ()=>number =()=>{return 67}
/*
对象类型有哪几种形式
对象类型
数组类型
类类型
函数类型

*/ 

let num = 333;

const one = 1;
const two = 2;
const three = one+two;

/*
这种情况用户可以传任何参数  不一定是数字类型  所以需要加注解 
function getTotal(one,two){
    return one+two
}
const total = getTotal(2,4); */


const hello = {
    name:'王五',
    age:444
}
//ts会自动识别对象里面每个属性的类型

function getTotal(one:number,two:number){
    return one+two+''
}
const total = getTotal(2,8);
//上面这种写法 虽然确定了参数的类型 但是么有限制输出类型 如果按照下面的方式输入  就不是数字类型了
/* 
function getTotal(one:number,two:number){
    return one+two+''
}
const total = getTotal(2,8);

可以给total加类型注解 但是编辑器会报错
const total : number - getTotal(2,3);
更好的方式是给函数加类型
function getTotal(one:number,two:number) : number{
    return one+two+''
}
此时如果再输入字符串就会提示报错
*/