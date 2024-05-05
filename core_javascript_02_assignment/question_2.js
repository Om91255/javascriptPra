/**
 * . The following is an array of 10 students ages:
 *        => const ages = [19,24,19,20,24,25,26,24,25,22]
     1. sort the array and find the min and max age.
     2. the median age(one middle item o two middle items divided by two)
     3. the average age(all items divided by number of items)
     4. the range of the ages(max minus min)
     5. compare the value of (min - average) and (max - average), use abs() method
3.
 */




age=[19,24,19,20,24,25,26,24,25,22]

//sorting
  age.sort((a,b)=>a-b)

  console.log("after sorting")
  for(i=0;i<age.length;i++){
     console.log(age[i])
}

//max_min_ages
  console.log("max age of student :",max_age=age[age.length-1])
console.log("min age of student",min_age=age[0])

//for medin age
 let medianage;
 if(age.length%2==0){
    let mid1=age[Math.floor((age.length/2)-1)]
    let mid2=age[Math.floor(age.length/2)]
    medianage=(mid1+mid2)/2
    console.log("medianage")
    console.log(medianage)
 }else{
    medianage=age[Math.floor(age.length/2)]
    console.log("medianage")
    console.log(medianage)
}

// for average age
 let sum=0
 for(i=0;i<age.length;i++){
    sum=sum+age[i]
}
console.log("the average age of student ",sum/age.length)

//for range of ages
 ageRange=max_age-min_age
console.log("the range of age",ageRange)


//for compare 

