const mechanic={
    name : "deepak",
    fixItem :function(itemName,arg){
        console.log(`${this.name} ${itemName} ${arg} has been fixed`)
    }
}

const person={
    name :"mohar"
}

mechanic.fixItem.call(person,"tv","sk")
mechanic.fixItem.apply(person,["tv", "sk"])
console.log(mechanic.fixItem.bind(person,"tv" , "sk"))  //return function
mechanic.fixItem.bind(person,"tv" , "sk")()
