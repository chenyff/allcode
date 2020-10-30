class Lady{
    content='hi，桔子'
    sayHello(){
        return this.content
    }
}
/* class Little extends Lady{
    sayLove(){
        return 'do u love me'
    }
    sayHello(){
        return '吃了么'
    }
}
const company = new Lady()


const LitterSiter = new Little();
console.log(LitterSiter.sayHello())
console.log(LitterSiter.sayLove()) */
// super关键字   还是继续使用之前的类  但是在返回的内容后面加几个汉字
class Little extends Lady{
    sayLove(){
        return 'do u love me'
    }
    sayHello(){
        return super.sayHello()+'加几个汉字'
    }
}
const LitterSiter = new Little();
console.log(LitterSiter.sayHello())
console.log(LitterSiter.sayLove()) 

