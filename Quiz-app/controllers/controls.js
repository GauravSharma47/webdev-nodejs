const mongoose = require('mongoose');
const express =require("express");
const quizModel=mongoose.model("quiz");
const router=express.Router();

var quizQuestions=NaN;
quizModel.find((err,docs)=>{
    if(!err){
        quizQuestions=docs;
        console.log(quizQuestions.length);
    }
    else{
        res.send("Unable to load quiz");
    }
})   
var currentQuestion=0;
var correctAnswers=0;
router.get("/",(req,res)=>{
            res.render('index',{'question':quizQuestions[currentQuestion].question,
            'a':quizQuestions[currentQuestion].a,
            'b':quizQuestions[currentQuestion].b,
            'c':quizQuestions[currentQuestion].c,
            'd':quizQuestions[currentQuestion].d});   
});

router.post("/next",(req,res)=>{
    if (req.body.option == quizQuestions[currentQuestion].correct){
        correctAnswers=correctAnswers+1;
    }
    if (currentQuestion<quizQuestions.length-1){
        currentQuestion=currentQuestion+1;
        res.render('index',{'question':quizQuestions[currentQuestion].question,
            'a':quizQuestions[currentQuestion].a,
            'b':quizQuestions[currentQuestion].b,
            'c':quizQuestions[currentQuestion].c,
            'd':quizQuestions[currentQuestion].d});
    }
    else{
        res.send("Quiz Over </br> you gave "+correctAnswers+ " correct answers out of "+quizQuestions.length+".");
        
    }   
    
})

module.exports=router;