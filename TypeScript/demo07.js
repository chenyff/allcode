"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ChenYuFei = /** @class */ (function () {
    function ChenYuFei(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    ChenYuFei.prototype.interest = function () {
        console.log('挣钱养家');
    };
    return ChenYuFei;
}());
var boy = new ChenYuFei('陈宇飞', 20, '前端');
console.log(boy.name);
console.log(boy.age);
console.log(boy.skill);
boy.interest();
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '美丽';
        return _this;
    }
    Son.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('我爱爸爸');
    };
    Son.prototype.hobby = function () {
        console.log('看书');
    };
    return Son;
}(ChenYuFei));
var zien = new Son('陈子恩', 1, '吃奶');
console.log(zien.xingxiang);
zien.hobby();
zien.interest();
