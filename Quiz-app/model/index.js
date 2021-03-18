const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb",{ "useNewUrlParser": true , "useUnifiedTopology": true },(error,)=>{
    if(!error){
        console.log("DB connected successfully");
    }
    else{
        console.log("ellol");
    }
    });

const Quiz=require("./quiz.model");