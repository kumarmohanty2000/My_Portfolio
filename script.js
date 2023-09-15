$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 200){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//new


// var express = require("express");
// var bodyParse = require("body-parser");
// const mongoose = require("mongoose");

// const app = express()

// app.use(bodyParse.json())
// app.use(express.static('public'))
// app.use(bodyParse.urlencoded({
//     extended:true
// }))

// //connect to database

// mongoose.connect('mongodb://0.0.0.0.27017/mydb',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// var db = mongoose.connection;

// //check connect

// db.on('error',()=>console.log("error in conecting database"));
// db.once('open', () => console.log("Conecte to database"));

// //data uplode

// app.post("/feedback",(req,res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var subject = req.body.subject;
//     var message = req.body.message;


//     //object

//     var data = {
//         "name":name,
//         "email":email,
//         "subject":subject,
//         "message":message
//     }

//     //sent to database

//     db.collection('feedback').insertOne(data,(err,collection)=>{
//         if(err) throw err;
//         console.log("Record incerted");
//     })

//     //return res.redirect("done.html");


// });


// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin" : '*'
//     })

//     return res.redirect('index.html');

// }).listen(3000);
