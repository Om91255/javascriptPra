/** first way to make a file to module

exports.add =(a,b)=>{       //using expots here we creat user define module
    return a+b  
}           //avobe function can be call from any were of first_node.js file

exports.substract=(a,b)=>{
    return a-b
}
exports.product=(a,b)=>{
    return a*b
}*/


//another way to make a file to module

let add=(a,b)=>{
    return a+b
}
let minus=(a,b)=>{
    return a-b
}
let product=(a,b)=>{
    return a*b
}

module.exports={
        add : add,
        minus :minus,
        product :product
}