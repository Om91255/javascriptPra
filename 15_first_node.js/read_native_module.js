
const fs=require('fs')

/*
 * read from the file
 * two way to read
 * 1...synchronous
 * 2...asynchronous
 */



 

// read by synchronous way
console.log("beford read")

let content = fs.readFileSync('sir.txt')

console.log("content read : "+content)

console.log("beford read")
/**
//read by asynchronous way
console.log("beford read")

 fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log("file content :" + content)
 })

console.log("after read")*/