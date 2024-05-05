/**
 * logic to create user collection
 * 
 * logic to define the schema of user collection
 */

const mongoose=require("mongoose")

const user_schema=new mongoose.Schema({
    name : String,
    age : Number
})

module.export = mongoose.model("user",user_schema)