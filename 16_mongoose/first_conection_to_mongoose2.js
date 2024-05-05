const mongoose=require("mongoose")
const user_model=require("./user_module")


mongoose.connect("mongodb://127.0.0.1:5500//mongo_db");
const db=mongoose.connection;

db.once("open",()=>{
    console.log("yeh ! i connected with mongo db")

    //time to inser to some document
    init()
})

db.on("error",()=>{
    console.log("error while connecting database")
})


async function init(){
    //logic to insert the document to database
    const user_obj={
        name : "om",
        age :23
    }
    try{
        //insert inside the user collection
        const user =await user_model.create(user_obj)
        console.log("user created",user)
    }catch(err){
        console.log("error while insertion ",err)
    }
  
} 