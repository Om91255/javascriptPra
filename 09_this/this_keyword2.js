//here function person is constructor function
function person(name){
    this.name=name      //if we define this inside the constructor function then this refer to the object which created
}

const person_obj=new person("om")
console.log(person_obj)     //person {name : 'om'}
console.log(person_obj.name)    //om