// interface
interface Girl {
    name:string,
    age:number,
    bust:number,
    waistline ?: number,
    [propname:string]:any
}
// 意思是除了上面已知的几个属性 还可以添加别的属性  属性的名字是字符串类型  属性的值可以是任意类型
const girl = {
    name:'小芳',
    age:18,
    bust:94,
    waistline:21,
    sex:'女'
}
const getInfo = (girl:Girl)=>{
    console.log(girl.name+'今年'+girl.age)
    console.log(girl.name+'那个啥是'+girl.bust)
    girl.sex && console.log(girl.name+'是个'+girl.sex+'的')
}
getInfo(girl)