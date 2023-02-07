const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let studentPersonal=new Schema({
    prn:{
        type:String,
        maxlength:6
    },
    rollno:{
        type:String,
        maxlength:2
    },
    division:{
        type:String,
        
    },
    phoneNo:{
        type:String,
        
    },
    FirstN:{
        type:String,
        
    },
    LastN:{
        type:String,
        
    },
    tempAddr:{
        type:String,
        
    },
    admYear:{
        type:String,
        
    },
    ugpointer:{
        type:String,
        
    },
    ugper:{
        type:String,
        
    },
    mcapointer:{
        type:String,
        
    },
    tenthScore:{
        type:String,
        
    },
    twelveScore:{
        type:String,
        
    },
    email:{
        type:String
    },
    persEmail:{
        type:String
    }
})




module.exports= mongoose.model("studentView",studentPersonal)