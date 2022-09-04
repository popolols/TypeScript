"use strict";
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
function logginIdentity(args) {
    // console.log(args.length)
    return args;
}
function copyFields(target, source) {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
const result = copyFields(x, { b: 10, d: 20 });
console.log(result);
