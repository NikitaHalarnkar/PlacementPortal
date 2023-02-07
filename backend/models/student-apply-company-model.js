const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let studentApply=new Schema({
    email:{
        type:String
    },
    company:{
        type:String
    }
})

module.exports= mongoose.model("studentApply",studentApply)