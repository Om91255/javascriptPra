const express=require('express')
console.log(typeof express)

const app=express()

/**
 * send request to the server
 */
app.get("/",(req,res)=>{
    req.send("hello from the express server")
})


/**
 * starting the express server
 */
app.listen(8000,()=>{
    console.log("server gone started")
})