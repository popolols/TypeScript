class Person{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

  sayHello(){
    console.log(this)
    console.log(this.name)
    console.log(this.age)
  }
}

const per =new Person('孙悟空',90)
per.sayHello()