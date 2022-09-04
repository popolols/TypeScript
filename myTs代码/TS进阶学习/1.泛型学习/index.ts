// 泛型类型
interface GenericIdentifyFn<T>{
  (arg:T):T;
}
function identify<T>(arg:T):T{
  return arg
}

let meIdentify:GenericIdentifyFn<number>=identify


// 泛型类
class GenericNumber<T>{
  zeroValue:T;
  add:(x:T,y:T)=>T;
}

// 泛型约束
interface LengthWise{
  length:number
}
function logginIdentity<T extends LengthWise>(arg:T){
  return arg.length
}
logginIdentity('jjj');

// 在泛型约束中使用类型参数
function getProperty<T,K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
let keys:keyof typeof x
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.