function calculator(operator,a,b){      //OPERATOR is function which is pass inside the function is calculator this technique is known as hof ...here operator is callback function
    return operator(a,b)
}

console.log(calculator((a,b)=>a+b,5,6))