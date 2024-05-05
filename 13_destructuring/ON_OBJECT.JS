

/*
const obj={
    name :"om",
    age :20,
    salary :100000
}

//let {name,age,salary}=obj
//console.log(salary)       output:- 100000


let {name,year,salary}=obj
console.log(year)       ///undefine

*/



const obj={
    name :"om",
    age :20,
    salary :100000,
    addtess :{
            city : "PageTransitionEvent",
            state: " patna",
            country : 'india'
    }
}

//console.log(country)            //undefine

let {addtess:{city}}=obj
console.log({addtess:{city}})










