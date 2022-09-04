"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            console.log("get 函数被调用了!");
            return this._name;
        }
        set name(value) {
            console.log("set 函数被调用了!");
            this._name = value;
        }
        sayHello() {
            console.log(`大家好！我是${this._name}`);
        }
    }
    // class Employee extends Person{
    //   constructor(name:string,age:number){
    //     super(name,age)
    //   }
    //   sayHello(): void {
    //     console.log("employy子类",super.sayHello())
    //   }
    // }
    const per = new Person("张三", 30);
    console.log(per.name);
    per.name = "猪八戒";
    console.log(per);
    //  per.sayHello()
})();
