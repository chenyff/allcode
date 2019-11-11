"use strict";
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
console.log('-------------');
var chen = '陈宇飞 前端开发';
console.log(chen);
//boolean  true false   之前的0 null都不能随意转换了
var b = true;
var b = false;
//enum 类型 枚举
console.log('----------');
var REN;
(function (REN) {
    REN[REN["NaN"] = 0] = "NaN";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
console.log(REN.yao); //此时会打印出来 2 也就是索引值
var DOG;
(function (DOG) {
    DOG["dog1"] = "\u5927\u767D";
    DOG["dog2"] = "\u4E8C\u767D";
    DOG["dog3"] = "\u82B1\u82B1";
})(DOG || (DOG = {}));
console.log(DOG.dog3); //此时打印出来的是 花花
//any 类型  万能类型
var t = 10;
t = 'what';
t = true;
console.log(t); //true
