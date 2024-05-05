/** 
Q . 1. Write a program that grade student based on their marks 
A. If grater than 90 then A Grade
B. If between 70 and 90 then a B grade
C. If between 50 and 70 then a C grade
D. Below 50 then an F grade
*/

marks=86

if(marks>90){
    console.log("A grade",+marks)
}
else if(marks>=70 && marks<90){
    console.log("B grade",+marks)
}
else if(marks>=50 && marks<70){
    console.log("C grade",+marks)
}
else if(marks<50) {
    console.log("F grade",+marks)
}
else{
    console.log("fail",+marks)
}

