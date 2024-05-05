//normal proise

const promeseFormSimran=new Promise(((resolve,reject)=>{
    let parenDecision=false
    if(parenDecision){
        resolve('yes, shaddi ki tayari kro')
    }else{
        reject('papa ne mana kr diya')
    }
}));

promeseFormSimran.then((message)=>{console.log('message from my girl'+message)
console.log('my life is set !!!')}).catch((msg)=>{
        console.log("message from girl: "+msg)
        console.log('where is my tinder')
}).finally(()=>{console.log('finally i am clear')})