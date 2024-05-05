

const gf1Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf1 is ready to come")
        }else{
            reject("gf1 is not coming")
        }
    },500)
})
const gf2Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf2 is ready to come")
        }else{
            reject("gf2 is not coming")
        }
    },2000)
})
const gf3Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf3 is ready to come")
        }else{
            reject("gf3 is not coming")
        }
    },2000)
})

const gfPromise=[gf1Promise,gf2Promise,gf3Promise]

Promise.any(gfPromise).then((message)=>{
    console.log(message)
    console.log("yes,i am going to date !!!")
}).catch((msg)=>{
    console.log(msg)
    console.log("aur kitne gf banaau ")
})


