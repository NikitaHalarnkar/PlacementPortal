const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let adminPost=new Schema({
    postTitle:{
        type:String,
    },
    companyName:{
        type:String
    },
    companyDesc:{
        type:String,
    }
})




module.exports= mongoose.model("adminPost",adminPost)