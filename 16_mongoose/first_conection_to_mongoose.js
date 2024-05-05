const mongoose=require("mongoose")

/**
 * i would like to connect with the mongodb
 * 
 * event driven......*/
 

mongoose.connect("mongodb:///mongo_db");
const db=mongoose.connection;

db.once("open",()=>{
    console.log("yeh ! i connected with mongo db")
})

db.on("error",()=>{
    console.log("error while connecting database")
})