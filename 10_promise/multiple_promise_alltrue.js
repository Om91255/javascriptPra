

const dost1Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost1 is ready to come")
        }else{
            reject("dost1 is not coming")
        }
    },500)
})
const dost2Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost2 is ready to come")
        }else{
            reject("dost2 is not coming")
        }
    },500)
})
const dost3Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost3 is ready to come")
        }else{
            reject("dost3 is not coming")
        }
    },500)
})

const friendPromise=[dost1Promise,dost2Promise,dost3Promise]

Promise.all(friendPromise).then((message)=>{
    console.log(message)
    console.log("i am ready!!!")
}).catch((msg)=>{
    console.log(msg)
    console.log("i am not ready ")
})


