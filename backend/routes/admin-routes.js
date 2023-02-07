//import express from "express";
const express=require('express')
const Admin=require('../models/admin-model.js')
const userSchema=require('../models/user-model.js')
const studentPersonal=require('../models/student-detail-model')
const AdminPost=require('../models/admin-post-model.js')
// import Admin from "../models/admin-model.js"
// import mongoose from "mongoose";

const adminRouter=express.Router();

adminRouter.post("/AdminLogin",(req,res)=>{
    const {email,password}=req.body
    Admin.findOne({email:email},(err,admin)=>{
        if(admin){
            if(password === admin.password){
                res.send({message:"Login successful "+admin.email,admin:admin})
            }
            else{
                res.send({message:"Password incorrect"})
            }
        }
    })

})

adminRouter.post("/AdminPost",async(req,res)=>{
    const{postTitle,companyName,companyDesc}=req.body
    const admPost=new AdminPost({postTitle,companyName,companyDesc})
    const savePost=await admPost.save()
    if(savePost)
    return res.status(200).json({message:"company details posted successfully"})
    if(err)
    return res.status(400).send("Error occurred")
})

adminRouter.route('/ViewStudents').get((req,res)=>{
    studentPersonal.find((err,user)=>{
        if(err){console.log(err);}
        else{res.json(user)}
    })
})


adminRouter.route('/ViewStudentsApply').get((req,res)=>{
    var emails=[]
    userSchema.find({})
    .then(data=>{


        data.map((e,k)=>{
            emails.push(e.email)
        })

        studentPersonal.find({email:{$in:emails}})
        .then(data=>{
            console.log(data)
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})


adminRouter.route('/matchStudent').get((req,res)=>{
    userSchema.aggregate([
        {
            $lookup:{
                from:"studentviews",
                localField:"email",
                foreignField:"email",
                as:"Student_Data"
            },
        },
         {
            $replaceRoot: {newRoot:{$mergeObjects:[{$arrayElemAt:["$Student_Data",0]},"$$ROOT"]}}   
            //  $unwind:"$Student_Data",
         },
         {$project:{Student_Data:0}}
    ])
    .then((data)=>{
        res.json(data)
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=adminRouter
 //export default adminRouter;