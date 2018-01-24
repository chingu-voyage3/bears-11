var express = require('express');
var routes = require('./routes/routes')
var path = require('path');
var app = express();

app.use(express.static('build'));
app.use('/', routes)

app.listen(3000,()=>{
    console.log("SERVER ON")
})