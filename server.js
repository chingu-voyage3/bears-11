var express = require('express');
var routes = require('./routes/routes')
var path = require('path');
var app = express();

// REMEMBER TO PUSH CHANGES TO ORIGIN2; NOT ORIGIN; ORIGIN3 IS FOR TEAM PROJ

app.use(express.static('build'));
app.use('/', routes)

app.listen(3000,()=>{
    console.log("SERVER ON")
})