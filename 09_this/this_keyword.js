/** 
function func(){
    console.log(this)   //this is global object
}

func()*/

//using this inside the object
const obj={
     name : 'om',
     age  : 21,
     alias :this.name+" "+"kumar"  , //here this keyowd is is global object not the part of obj(our object) object.output is here [undefine  kumar] undefine here ,due to this is here global object in global objct name(key) is not define
     greet : function(){
        console.log(this.name)  //here this, refering to the object it's part  of (means it is a part of  local object which name is obj)
            //output is om
    },
     greet2:()=>console.log(this.name),     //here this is undefine
     address :{
            country : "india",
            name : "sir",
            state :this.country,     //here also this is undefine,here this is global object
            greet1 : function(){
                console.log(this.name)  //here this, refering to the object it's part  of (means it is a part of  local object which name is obj)
                //output is sir
            }
     }
}

obj.greet() //om
obj.address.greet1()    //sir
obj.greet2()    //undefine
console.log(obj.alias)  //undefine kumar
console.log(obj.address.state)  //undefine
