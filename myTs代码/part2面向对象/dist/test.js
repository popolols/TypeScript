"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
let a = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack
class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const dog = new Dog('汪汪', 10);
// dog.sayHi()
