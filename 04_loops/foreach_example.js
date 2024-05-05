const names=["om","rohan","d.j","shanu"]

console.log("print using for loop")
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

console.log("print using for_each")

const temp=names.forEach((data) => {console.log(data)})
console.log(temp)       //for_each loop dosen't return any thing