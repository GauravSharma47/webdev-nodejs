const mongoose =require("mongoose");

var QuizSchema=new mongoose.Schema({
    question: {
        type: String,
        required : "Required"
    },
    a:{
        type: String,
        required : "Required"
    },
    b:{
        type: String,
        required : "Required"
    },
    c:{
        type: String,
        required : "Required"
    },
    d:{
        type: String,
        required : "Required"
    },
    correct:{
        type: String,
        required : "Required"
    }
}, {collection:"quiz"});

mongoose.model("quiz",QuizSchema);

