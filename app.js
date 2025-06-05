const express =require("express")
const app=express()//storing it in app,app variable throughout project ma use garxam

app.get("/",(req,res)=>{
    res.send("yes");
    });



app.listen(3000,function(){
    console.log("NodeJs has started on port 3000")
});


