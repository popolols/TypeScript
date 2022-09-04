class Animal {
  public name:string;
  constructor(name:string) {
      this.name = name;
  }
 
}

let a = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack


class Dog extends Animal{
  age:number
  constructor(name:string,age:number){
    super(name)
    this.age=age
  }
  // sayHi(): string {
    
  // }
}

const dog=new Dog('汪汪',10)
// dog.sayHi()
