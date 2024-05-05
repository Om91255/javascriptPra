const fs=require('fs')

/*
//wrtie : way sync
console.log("before write ")
fs.writeFileSync('output.txt',"hello om how are you")
console.log("after write")
*/

//write file async
console.log("before write")

fs.writeFile('output2.txt',"hello my name is om",(err)=>{
    if(err){
        return console.log(err)
    }
    console.log("written sucesfully")
 })
 console.log("after write")