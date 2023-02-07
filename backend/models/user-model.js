//import mongoose from "mongoose";
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,
    required:true},
    email:{type:String,
        required:true,
        unique:true},
    password:{type:String,
        required:true},
        
})

const User=new mongoose.model("User",userSchema)



//export default User;
module.exports=User