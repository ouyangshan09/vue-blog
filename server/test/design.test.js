/**
 * Created by ouyangshan09 on 2017/3/30.
 * 设计模式测试
 */

describe("JavaScript 设计模式", function () {
    describe.skip("工厂设计模式", function () {
        it("结果", function () {
            const p1 = new createPerson('lian', 28, '男');
            const p2 = new createPerson('ll', 13, '女');
            console.log(`p1-name:${p1.name}, p1-age:${p1.age}`);
            console.log(`p2-name:${p2.name}, p2-age:${p2.age}`);
            console.log(typeof p1);
            console.log(typeof p2);
        });
    });
    describe.skip("复杂工厂设计模式", function () {
        it("结果", function () {
            // var childClass = new BicycleChild("龙恩");
            // console.log(childClass.sellBicycle("model"));
            let byChild = new ByChild("ouyang");
            console.log(byChild.sellBicycle());
        });
    });
    describe("单例", function () {
        it("结果", function () {
            let a = Singleton.getInstance("a");
            let b = Singleton.getInstance("b");
            console.log(a.getName());
            console.log(b.getName());
            console.log(a === b);
        });
    });
});
// class Singleton{
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//     test;
//     static getInstance(name){
//         this.te
//         let instance = null;
//         return !instance ? instance = new Singleton(name) : instance;
//         // return function (name) {
//         //     if(!instance){
//         //         instance = new Singleton(name);
//         //     }
//         //     return instance;
//         // }
//     };
// }
// 单体模式
var Singleton = function(name){
    this.name = name;
};
Singleton.prototype.getName = function(){
    return this.name;
};
Singleton.getInstance = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

function createPerson(name, age, sex) {
    let obj = Object.create({});
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj;
}

class ByShop {
    constructor(name){
        this.name = name;
        this.method = function () {
            return this.name;
        }
    }
    sellBicycle(model){
        let bicycle = this.createBicycle(model);
        bicycle.A();
        bicycle.B();
        return bicycle;
    }
    //子类重写该方法
    createBicycle(model){
        return new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
}
class ByChild extends ByShop{
    constructor(name){
        super();
        this.name = name;
    }
    createBicycle(){
        let A = function () {
            console.log("执行A业务操作");
        };
        let B = function () {
            console.log("执行B业务操作");
        };
        return {
            A: A,
            B: B,
        }
    }
}

// 定义自行车的构造函数
var BicycleShop = function(name){
    this.name = name;
    this.method = function(){
        return this.name;
    }
};
BicycleShop.prototype = {
    constructor: BicycleShop,
    /*
     * 买自行车这个方法
     * @param {model} 自行车型号
     */
    sellBicycle: function(model){
        var bicycle = this.createBicycle(model);
        // 执行A业务逻辑
        bicycle.A();

        // 执行B业务逻辑
        bicycle.B();

        return bicycle;
    },
    createBicycle: function(model){
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
};
// 实现原型继承
function extend(Sub,Sup) {
    //Sub表示子类，Sup表示超类
    // 首先定义一个空函数
    var F = function(){};

    // 设置空函数的原型为超类的原型
    F.prototype = Sup.prototype;

    // 实例化空函数，并把超类原型引用传递给子类
    Sub.prototype = new F();

    // 重置子类原型的构造器为子类自身
    Sub.prototype.constructor = Sub;

    // 在子类中保存超类的原型,避免子类与超类耦合
    Sub.sup = Sup.prototype;

    if(Sup.prototype.constructor === Object.prototype.constructor) {
        // 检测超类原型的构造器是否为原型自身
        Sup.prototype.constructor = Sup;
    }
}
var BicycleChild = function(name){
    this.name = name;
// 继承构造函数父类中的属性和方法
    BicycleShop.call(this,name);
};
// 子类继承父类原型方法
extend(BicycleChild,BicycleShop);
// BicycleChild 子类重写父类的方法
BicycleChild.prototype.createBicycle = function(){
    var A = function(){
        console.log("执行A业务操作");
    };
    var B = function(){
        console.log("执行B业务操作");
    };
    return {
        A: A,
        B: B
    }
};
