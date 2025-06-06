const express =require("express")
const app=express()//storing it in app,app variable throughout project ma use garxam

app.set("view engine","ejs")//ejs use gardai chu ,k k env set chaiyeko xa gardya vanye ko


app.get("/",(req,res)=>{
    // res.send("hello ");
    res.render("home.ejs")
    });



app.listen(3000,function(){
    console.log("NodeJs has started on port 3000")
});


