const twice = x => x*2  //function 1
const square = x => x*x     //function 2

// lets take function compose
const compose= (fn1,fn2) =>(value) => fn1(fn2(value))   //here fn1,fn2 is argument which is also function and retun fn1(function)

console.log(compose(square,twice)(5))