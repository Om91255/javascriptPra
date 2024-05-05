//closures used for encaplsulation

function customerCounter(){
    let count=0
    return function(){
        count++
        console.log("new customer count is",count)
    }
}

let counter= customerCounter()
counter()
counter()
counter()