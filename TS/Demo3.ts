//函数传参定义类型

/*
这样写会报错 
function add({one,two}){
    return one+two
}
const total = add({one:1,two:4}) */
/* 
这样写也是错的
function add({one:number,two:number}){
    return one+two
}
const total = add({one:1,two:4}) */
function add({one,two}:{one:number,two:number}) : number{
    return one+two
}
const totalnum = add({one:1,two:4})

function sum({one}:{one:number}) : number{
    return one;
}
const num = sum({one:666})