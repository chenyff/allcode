import { Z_VERSION_ERROR } from "zlib"

class ChenYuFei{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('挣钱养家')
    }
}
let boy:ChenYuFei = new ChenYuFei('陈宇飞',20,'前端')
console.log(boy.name)
console.log(boy.age)
console.log(boy.skill)
boy.interest()
class Son extends ChenYuFei{
    public xingxiang:string = '美丽'
    public interest(){
        super.interest()
        console.log('我爱爸爸')
    }
    public hobby(){
        console.log('看书')
    }
}
let zien = new Son('陈子恩',1,'吃奶')
console.log(zien.xingxiang)
zien.hobby()
zien.interest()