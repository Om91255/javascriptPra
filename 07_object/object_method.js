/** 
 * this is the example of    object.create()   method in object method*/
const userOne={
    UserName :'vishwa',
    id : '243124'
}
console.log(userOne)
const userTwo =Object.create(userOne)
userTwo.dept='web dev'
userTwo.UserName='om'
userTwo.id='233444343'
console.log(userTwo)

/*
const person = {
    name : 'om',
    salary : 4000
}
console.log(Object.getOwnPropertyDescriptor(person))
*/