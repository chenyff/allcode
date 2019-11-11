//固定传参
/* function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐'
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result); */

//有固定参数 也有不定参数
/* function searchSmall(age:number,stature?:string):string{
    let yy:string = '';
    yy = '找到了'+age+'岁'
    if(stature!=undefined){
        yy+=stature
    }
    return yy+'的小姐姐';
}
let result:string = searchSmall(20,'肤白貌美')
console.log(result); */

/* function searchSmall(age:number=18,stature:string='有钱'):string{
    let yy:string = '';
    yy = '找到了'+age+'岁'
    if(stature!=undefined){
        yy+=stature
    }
    return yy+'的小姐姐';
}
let result:string = searchSmall()
console.log(result); */
function searchSmall(...xuqiu:string[]):string{
    let yy:string = '找到了';
    for(let i=0;i<xuqiu.length;i++){
        yy+=xuqiu[i]
        if(i<xuqiu.length-1){
            yy+='、'
        }
    }
    yy+='的小姐姐'
    return yy
}
let result:string = searchSmall('18岁','肤白貌美','懂事','有钱')
console.log(result)
