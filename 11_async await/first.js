
/*normal function run
function printMessage(){
    return"hello student"
}
console.log(printMessage)


//use of async
async function printMessage(){
    return "hello student"
}
console.log(printMessage())     //async return promise(printMessage)

// below printing promise using .then
printMessage().then(msg=>{
    console.log(msg)
})*/


async function printHelloAwait(){

    
    let result= await new Promise((resolve,reject)=>
    {
        //await always apply on promise
        setTimeout(()=>{
            console.log('hello students')
    },3000)
    })
    console.log(result)
    console.log("this line should be the last line")
}

console.log("first line")
printHelloAwait()
console.log("lastline")
