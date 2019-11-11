/* interface HusBand{
    sex:string
    hobby:string
    buy:boolean
}
let myboy:HusBand = {sex:'男',hobby:'看书，看电视剧',buy:true}
console.log(myboy) */

interface SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan = function(source:string,subString:string):boolean{
    let flag = source.search(subString)
    return (flag!=-1)
}
console.log(mySearch('高、富、帅、德','丑'))