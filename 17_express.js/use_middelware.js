const express=require('express')
const app=express()

let dat=new Date();
let da=dat.toLocaleDateString();

app.use((req,res,next)=>{       //rout level middleware
    console.log("welcome to the demo og mw")
    next()
})
/**
    log the time of the requested
*/

const m1=function(req,res,next)
{
    console.log("request came at :",da)
    next()
}


/**
 * long the time after sending response
 */
const m2=function(req,res,next){
    console.log("response sent at :",da)
    next()
}

app.use("./hello",m1)
app.get("./hello",(req,res,next)=>{
    res.send("message")
    next()
})

app.use("/hello",m2)



/**
 * start the server
 */
app.listen(3000, ()=>{
    console.log("server get started")
})