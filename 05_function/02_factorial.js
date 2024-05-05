function fact(num){
    if(num==0 && num==1){
        return 1
    }
    result=1
    for(i=1;i<=num;i++){
        result=result*i
    }
    return result
}

console.log(fact(5))