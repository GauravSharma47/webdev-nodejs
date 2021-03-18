const express = require('express');
const app = new express();
const port = 3000;
const mongoose = require("mongoose");
const connection=require("./model");
const controls=require("./controllers/controls");
const path =require("path");
const expressHandlebars=require("express-handlebars");
const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({
  extended:true
}))

app.use("/static",express.static(__dirname + '/static'));
app.use(express.urlencoded());
app.set("views",path.join(__dirname,"/views/"));

app.engine("hbs",expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainLayout",
    layoutsDir:__dirname+"/views/layouts"
}));

app.set("view engine","hbs");

app.use("/",controls);

app.listen(port, () => console.log(`listening on port ${port}!`));
