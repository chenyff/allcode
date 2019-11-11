"use strict";
var Xiao = /** @class */ (function () {
    function Xiao(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Xiao.prototype.sayHello = function () {
        console.log('你好啊');
    };
    Xiao.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return Xiao;
}());
var jiejie1 = new Xiao('女', '迪丽热巴', 40);
console.log(jiejie.name);
console.log(jiejie.sex);
console.log(jiejie.age);
jiejie.sayHello();
jiejie.sayLove();
