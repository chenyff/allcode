class Xiao{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello(){
        console.log('你好啊')
    }
    private sayLove() {
        console.log('我爱你')
    }
}
var jiejie1:Xiao = new Xiao('女','迪丽热巴',40)

console.log(jiejie.name)
console.log(jiejie.sex)
console.log(jiejie.age)
jiejie.sayHello()
jiejie.sayLove()