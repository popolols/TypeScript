declare class Animal {
  name:string;
  constructor(name:string):void;
  sayHi():string{
    return `My name is ${this.name}`;
  }
}