var express = require("express");
var bodyParser = require("body-parser");
const dotenv = require('dotenv');

dotenv.load();

var githubRoute = require("./backend/routes/githubAuth");
var routes = require("./backend/routes/routes")
var app = express();

//middleware
app.set('view engine', 'ejs');
app.set('views', './backend/views')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//below links routes/githubAuth to server
app.use("/auth",githubRoute)
app.use("/", routes)



app.listen(3000,()=>{
  console.log("Server is On...")
})
