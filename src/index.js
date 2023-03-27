const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const route = require("./routes")
dotenv.config()
const app = express()
app.use(express.json())



mongoose.connect(process.env.DB)
.then(()=>console.log("Database connected"))
.catch((err)=>(console.log(err)))
app.use("/", route)

app.listen(process.env.port||3000,function(){
console.log(`Server running on Port ${process.env.port}`)})
