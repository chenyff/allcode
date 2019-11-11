"use strict";
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.sayLove = function () {
        throw new Error("Method not implemented.");
    };
    XiaoJieJie.prototype.sayHello = function () {
        throw new Error("Method not implemented.");
    };
    XiaoJieJie.prototype.sex = function (sex) {
        throw new Error("Method not implemented.");
    };
    XiaoJieJie.prototype.say = function () {
        console.log('家家有本难念的经');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('陈宇飞', 20);
console.log(jiejie);
jiejie.say();
