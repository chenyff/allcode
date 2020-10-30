class PersonItem{
    public name:string;
    constructor(name:string){
        this.name = name
    }
}
const human = new PersonItem('陈宇飞')
console.log(human.name)
/* 
更简化的语法
class PersonItem{
    constructor(public name:string){
    }
}
*/