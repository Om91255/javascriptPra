/**
 * i want to call the function defined in my_module.js
 * 
 */

const obj=require("./my_module")

console.log(typeof obj)     //here it is object and add is its key and value of key is function
console.log(obj)
console.log(obj.add(6,6))
console.log(obj.minus(6,6))
console.log(obj.product(6,6))