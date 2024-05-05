function first(){
    return function sum(a,b){
        console.log(a+b)
    }
}

first()(6,6)