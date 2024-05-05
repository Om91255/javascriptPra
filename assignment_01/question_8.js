/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/

given_number=12

sum=0

do{

    sum=sum+given_number
    given_number--
}while(given_number>=1)
console.log(sum)