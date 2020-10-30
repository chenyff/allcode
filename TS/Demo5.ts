// interface接口
/* const faceTest = (name:string,age:number,money:number)=>{
    age<=24 && money >=2000 && console.log(name+'可以可以')
    age>24 || money < 2000 && console.log(name+'菜鸡菜鸡')
}
faceTest('陈宇飞',18,4000) */

interface biaozhun{
    name:string,
    age:number,
    money:number,
    isShow ?: number;
}
const fn1 = (boy:biaozhun)=>{
    boy.age<=24 && boy.money >=2000 && console.log(boy.name+'可以可以');
    (boy.age>24 || boy.money < 2000) && console.log(boy.name+'菜鸡菜鸡')
}
const fn2 = (info:biaozhun)=>{
    console.log(info.name+'今年'+info.age+'岁，有'+info.money+'元')
    info.isShow && console.log(info.name+'说显示')
}
const person1 = {
    name:'陈宇飞',
    age:28,
    money:8000,
    isShow:1
}
fn1(person1);
fn2(person1);