const express=require("express");
const app=express();
//var bodyParser=require('body-parser')
//var cors=require('cors');
//const Jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
/* app.use(bodyParser.urlencoded({
    extended: false
})) */
const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/SocialMedia';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connection Success Full"))
.catch((err)=>console.log(err));
//const {Userregister}=require("./Model/Userregister");














const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
dotenv.config();
app.listen(8800,()=>{
    console.log("backend ok");
})
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
}) 
     