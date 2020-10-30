/* class Person{
    name:string;
}
const person = new Person()
person.name = '江小白'
console.log(person.name) */
// 不在类里面对name进行定义，它默认是public类型
/* 
class Person{
    public name:string
}

*/
// private 只能在内部使用 外部使用会报错
class Person{
    private name:string;
    public sayHello(){
        console.log(this.name + 'say hello')
    }
}
const person = new Person();
// person.name = '陈宇飞';  //这样写就会报错