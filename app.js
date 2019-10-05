//jshint esversion:6
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.get("/", function(req, res){
  res.render("home");
});



app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
// mongoose.connect("mongodb+srv://admin-cheryl:Iphone8!@cluster0-zmvqc.mongodb.net/jewelryDB", 
// {useNewUrlParser: true, useCreateIndex:true}).then(console.log('success'));