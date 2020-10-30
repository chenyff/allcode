const numArr = [1,2,3,4];
//默认显示为number类型，如果想设置
const numA:number[] = [3,4,5,6];
const stringArr : string[] = ['一','二']
//多种类型的
const all : (number | string)[] = [23,'哈哈',222]


//数组中对象类型的定义
const people : {name:string,age:number}[] = [
    {name:'陈宇飞',age:18},
    {name:'陈晓飞',age:16}
]
//上述定义方法比较麻烦  可以使用 类型别名  以type开头 其实就跟变量差不多
type peo = {name:string,age:number};
const ren : peo[] = [
    {name:'陈宇飞',age:18},
    {name:'陈晓飞',age:16}
]

const a : (string|number)[] = [333,'你好']
//上面显示的位置不对应 可以使用元组  
const yuan : [string,number,number] = ['凌天',333,4444]