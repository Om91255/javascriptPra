console.log("hello from begning")

function hello(){
    console.log('hello from call back fn')
}

setTimeout(hello,3000)          //setTimeout is asynchronus function

console.log('hello from end')