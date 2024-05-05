amount = 450
day="monday"
/**
 * write the code to get final price
 * <100 then discount=10%
 * <200-300 then discount=20%
 * <300-500 then discount=30%
 * >500 then discount=40%
 * if day is monday then 10rs
 */
var final_amount=amount
if(amount<100){
    final_amount=final_amount-0.1*final_amount;
    console.log("final price is",final_amount)
}
else if(amount>=100 && amount<=200){
    final_amount=final_amount-0.2*final_amount;
    console.log("final price is",final_amount)
} 
else if(amount>=300 && amount<=500){
    final_amount=final_amount-0.3*final_amount;
    console.log("final price is",final_amount)
}
else{
    final_amount=final_amount-0.4*final_amount;
    console.log("final price is",final_amount)
}

if(day=="monday"){
    final_amount=final_amount-10
    console.log(final_amount)
}