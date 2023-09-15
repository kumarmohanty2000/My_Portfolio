const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://0.0.0.0.27017/mydb",{useNewUrlParser: true}, {useUnifiedTopology: true})

const data = {
            name:String,
            email:String,
            subject:String,
            message:String
        }

 const Node = mongoose.model("Node", data);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNode = new Node({
        name: req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        message : req.body.messag
    });
    newNode.save();
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})