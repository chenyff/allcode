class Xiaojiejie implements Girl{
  name='小芳'
  age=18
  bust=90
  say(){
      return '欢迎莅临指导'
  }
}
// 接口间的继承
interface Teacher extends Girl{
    teach():string
}