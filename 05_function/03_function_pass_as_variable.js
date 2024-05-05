//example::1
/** 
const hello=function hello_func(){
    console.log("hello students")
}

console.log(hello())        //output:-hello student 
                           //output:-undefine (due to because if in this program function does not take value and not return any value )
*/

//example::2
const sum_fun=function sum(a,b){
    return a+b
}

//console.log(sum(6,7))   //show error because sum() function is not available in this code and the function which is define in line 12 it's name is sum_fun 
console.log(sum_fun(8,8))