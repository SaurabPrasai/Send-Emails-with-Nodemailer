require("dotenv").config();
const express=require("express");
const sendMail = require("./sendMail");
const app=express();
const port=3000;
const path=require("path")

//middleware
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
})



app.post("/sendmail",sendMail)


app.listen(port,()=>{
    console.log("Listening on port ",port);
})