const express=require('express')
const userSchema=require('../models/user-model.js')
const studentPersonal=require('../models/student-detail-model')
const adminPost=require('../models/admin-post-model.js')
const bcrypt=require('bcrypt')
const studApply=require('../models/student-apply-company-model.js')
// import User from "../models/user-model.js"
//import studentPersonal from "../models/student-detail-model.js";
// import mongoose from "mongoose";
const session=require('express-session')
//const userEmail =require("D:\MCA\Semester_6\placementPortal\frontend\src\components\StudentDetails.js")
//const LocalStorage=require('node-localstorage')

const studentRouter=express.Router();

//var localStorage=new LocalStorage('./scratch')



// studentRouter.get('/login', async (req, res) => {
//   res.send('login page')
// })



//module.exports = router


studentRouter.post("/login",async (req,res)=>{
    const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ message: 'Something missing' })
  }

  const user = await userSchema.findOne({ email: email }) // finding user in db
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // comparing the password with the saved hash-password
  const matchPassword = await bcrypt.compare(password, user.password).then((isMatch)=>{
      if(!isMatch) return res.status(400).json({ message: 'Invalid credential' });

      const userSession={id:user._id,email:user.email,password:user.password}
      req.session.user=userSession
    res.json({ message: 'You have logged in successfully'}) 
    

    // localStorage.setItem("user",JSON.stringify(userSession))
    //     console.log(localStorage.getItem("user"))
  })
  

    // const sessionData=req.session;
    // const {email,password}=req.body
    // User.findOne({email:email},(err,user)=>{
    //     if(user){
    //         if(password === user.password){
    //             res.send({message:"Login successful "+user.email,user:user})
    //         }
    //         else{
    //             res.send({message:"Password incorrect"})
    //         }
    //     }else{
    //         res.send({message:"User not registered"})
    //     }
    // })

})

studentRouter.post("/register",async (req,res)=>{
    const {name,email,password}=req.body

    if(!name || !email || !password)
    return res.status(400).json({message:'Name, Email and Password Required'})

    if(password.length<8){
        return res.status(400).json({message:'Password should be atleast 8 characters'})
    }

    const user=await userSchema.findOne({email})
    if(user) return res.status(400).json({message:'User already exists'})

    const newUser=new userSchema({name,email,password})
    bcrypt.hash(password,7,async(err,hash)=>{
        if(err)
        return res.status(400).json({message:'Error saving password'})
        newUser.password=hash
        const savedUserRes=await newUser.save()

        if(savedUserRes)
        return res.status(200).json({message:'User registered successfully'})
    })

    // User.findOne({email:email},(err,user)=>{
    //     if(user){
    //         res.send({message:"User exists"})
    //     }else{
    //         const user=new User({
    //             name,
    //             email,
    //             password
    //         })
    //         user.save(err=>{
    //             if(err){
    //                 res.send(err)
    //             }
    //             else{
    //                 res.send({message:"Registered Successfully"})
    //             }
    //         })
    //     }
    // })
    
})

studentRouter.route('/ViewStudents').get((req,res)=>{
    userSchema.find((err,user)=>{
        if(err){console.log(err);}
        else{res.json(user)}
    })
})


studentRouter.route('/getEmail').get((req, res)=> {
  const userLocal=localStorage.getItem("user");
  console.log(userLocal["email"])
// eslint-disable-next-line
  const userEmail=userLocal["email"]
    const findID=userSchema.find({email:userEmail},{projection:{_id:1,name:0,email:1,password:0}})
      console.log(findID)
 
    // const userEmail= req.params.email;
    // const userFind=userSchema.findOne(userEmail, function(err,user){
    //     res.json(user)
    // })
    // if (!userFind) {
    //     return res.status(400).json({ message: 'User not found' })
        
    // }
    // else{res.json(user)}
});

studentRouter.route('/ApplyNow').post(async(req,res)=>{
  const{email,companyName}=req.body
  const applyNow=new studApply({email,companyName})
  const saveDetail=await applyNow.save()
  if(saveDetail)
  return res.status(200).json({message:"You have applied successfully"})
  if(err)
  return res.status(400).send("Error occurred")
})

studentRouter.route('/fillDetails').post(async(req,res)=>{
  const {prn,rollno,division,phoneNo,FirstN,LastN,tempAddr,admYear,ugpointer,ugper,mcapointer,tenthScore,twelveScore,email,persEmail}=req.body
  const student=new studentPersonal({prn,rollno,division,phoneNo,FirstN,LastN,tempAddr,admYear,ugpointer,ugper,mcapointer,tenthScore,twelveScore,email,persEmail})
  // student.prn=req.body.prn;
  // student.rollno=req.body.rollno;
  // student.phoneNo=req.body.phoneNo;
  // student.FirstN=req.body.FirstN;
  // student.LastN=req.body.LastN;
  // student.tempAddr=req.body.tempAddr;
  // student.ugpointer=req.body.ugpointer;
  // student.ugper=req.body.ugper;
  // student.mcapointer=req.body.mcapointer;
  // student.tenthScore=req.body.tenthScore;
  // student.twelveScore=req.body.twelveScore;
  // student.email=req.body.email;
  // student.persEmail=req.body.persEmail;

  const saveStudent=await student.save()
  if(saveStudent)
   return res.status(200).json({message:"details added successfully"})
  if(err)
   return res.status(400).send("Error occurred")
  })
  

  studentRouter.route('/getStudentData').get(async(req,res)=>{
    let userApp=userSchema.email
    let studentApp=studentPersonal.aggregate({$lookup:{from:userSchema,localField:studentApp.email,foreignField:userApp.email}})
    if(err){console.log(err)}
    else{res.json(student)}
  })

  studentRouter.route('/getPost').get((req,res)=>{
    adminPost.find((err,post)=>{
      if(err){console.log(err);}
      else{res.json(post)}
  })
  })
    

  studentRouter.route('/getCompany').get((req,res)=>{
    var comp=[]
    adminPost.find({})
    .then(data=>{
      data.map((c,k)=>{
        comp.push(c.companyName)
        
      })
      res.json(comp)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
 
//  studentRouter.route('/updateStudentData/:email').post(function (req, res) {
//    const userEmailData= userSchema.findOne({ email: userEmail })
//    console.log(userEmailData)
//     const user = userSchema.findById(req.params.id, function (err, user) {
//     if (!user)
//     return next(new Error('Unable To Find Student With This Id'));
//     else {
//     user.prn = req.body.prn;
//     user.rollno = req.body.rollno;
//     user.division = req.body.division;
    
//     user.save().then(stu => {
//     res.json('Form Updated Successfully');
//     })
//     .catch(err => {
//     res.status(400).send("Unable To Update Details");
//     });
//     }
//     });
//     });

module.exports=studentRouter
 //export default studentRouter;