class XiaoJieJie{
    sayLove() {
        throw new Error("Method not implemented.");
    }
    sayHello() {
        throw new Error("Method not implemented.");
    }
    sex(sex: any) {
        throw new Error("Method not implemented.");
    }
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('家家有本难念的经')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('陈宇飞',20)
console.log(jiejie);
jiejie.say();