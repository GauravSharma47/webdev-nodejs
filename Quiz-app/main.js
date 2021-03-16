const express = require('express');
const app = new express();
const port = 3000;
const mongoose = require("mongoose");

app.use("/static",express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

mongoose.connect("mongodb://localhost:27017/mydb",{"useNewUrlParser":true,"useUnifiedTopology": true},(error)=>{
  if(!error){
    console.log("Success");
  }
  else{
    console.log("error");
  }
})

app.listen(port, () => console.log(`listening on port ${port}!`));
