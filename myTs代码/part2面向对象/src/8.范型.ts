function createArray<T>(length:number,value:T):Array<T>{
  let result:T[]=[]
  for(let i=0;i<length;i++){
    result[i]=value
  }
  return result
}

// console.log(createArray(3,'x'))

interface LengthWise{
  length:number
}

function logginIdentity<T extends LengthWise>(args: T):T{
  // console.log(args.length)
  return  args
}

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

const result=copyFields(x, { b: 10, d: 20 });
console.log(result)