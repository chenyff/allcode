var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)
console.log('-------------')

var chen:string = '陈宇飞 前端开发'
console.log(chen)

//boolean  true false   之前的0 null都不能随意转换了
var b:boolean = true
var b:boolean = false

//enum 类型 枚举
console.log('----------')
enum REN{NaN,nv,yao}
console.log(REN.yao)//此时会打印出来 2 也就是索引值
enum DOG{dog1="大白",dog2="二白",dog3="花花"}
console.log(DOG.dog3);//此时打印出来的是 花花

//any 类型  万能类型
var t:any = 10
t = 'what'
t = true
console.log(t)  //true