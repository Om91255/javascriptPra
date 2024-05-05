
/** 
function fn(){
    let name = "vishwa"
    console.log(name)
}

fn()
console.log( name )     //here we can't access name due to name is local variable inside function fn() 
*/

// use of closures

function outerfn(){
    let outervar="i am om kumar"
    function innerfun(){
        console.log(outervar)
    }
    return innerfun
}

const fn=outerfn()      //lexical scoping
fn()