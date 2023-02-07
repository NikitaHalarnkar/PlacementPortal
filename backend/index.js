const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const studentRouter=require('./routes/user-routes')
const adminRouter=require('./routes/admin-routes')
const session=require('express-session')
const MongoDBStore=require('connect-mongodb-session')(session)




const app = express()

const MAX_AGE=1000*60*60*3

const port = process.env.PORT || 5000

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise
//const url=process.env.DATABASE_CONNECTION_STRING
mongoose.connect("mongodb+srv://placementAdmin:placementAdmin@placementcluster.pxdog.mongodb.net/placementSystem?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology:true}, ()=>{
    console.log("DB Connected")
})

const MongoDBstore=new MongoDBStore({uri:"mongodb+srv://placementAdmin:placementAdmin@placementcluster.pxdog.mongodb.net/placementSystem?retryWrites=true&w=majority",collection:'mySessions'})

app.use(session({
    secret:'a1s2d3f4g5h6',
    name: 'session-id', // cookies name to be put in "key" field in postman
    store: MongoDBstore,
    cookie: {
      maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: false,
      secure: false, // to turn on just in production
    },
    resave: true,
    saveUninitialized: false,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors(corsOptions))
app.use(express.json())

// ROUTERS
//app.use('/api', loginRouter)
app.use('/student',studentRouter)
app.use('/admin',adminRouter) 

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app

//const app=express()
//app.use(express.json())
//app.use(express.urlencoded({extended:true}))
//app.use(cors())

//app.use(session({resave:true,saveUninitialized:true,secret:'XCR3rsasa%RDHHH',cookie:{maxAge:6000}}))

  

// mongoose.connect("mongodb+srv://placementAdmin:placementAdmin@placementcluster.pxdog.mongodb.net/placementSystem?retryWrites=true&w=majority",{
//     useNewUrlParser:true, useUnifiedTopology:true
// },()=>{
//     console.log("DB Connected")
// })

// app.listen(5000,()=>{
//     console.log("listening to port")
// })





