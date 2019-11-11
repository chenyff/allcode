"use strict";
/* interface HusBand{
    sex:string
    hobby:string
    buy:boolean
}
let myboy:HusBand = {sex:'男',hobby:'看书，看电视剧',buy:true}
console.log(myboy) */
var mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '丑'));
