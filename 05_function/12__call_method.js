const mechanic={
    name : "deepak",
    fixItem :function(itemName){
        console.log(`${this.name} ${itemName} has been fixed`)
    }
}

const person={
    name :"mohar"
}

mechanic.fixItem.call(person,"tv")