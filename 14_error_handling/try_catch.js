/* this is giving error


console.log("i am at the first line")

let x=5
console.log(x.toUppercase())

console.log("i am at the last line")*/




console.log("i am at the first line")
try{
let x=5
console.log(x.toUppercase())}catch(err){
    console.log('error has been handeled.please proceed')
    // consol.log(err)          --> use to chechk what is the error
}finally{
    console.log('i will get invoked')
}

console.log("i am at the last line")