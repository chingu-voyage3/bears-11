var express = require("express");
var bodyParser = require("body-parser");
var githubRoute = require("./routes/githubAuth");
var routes = require("./routes/routes")
var app = express();

//added body parser, ejs, and cookie-sessions to package.JSON


//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//below links routes/githubAuth to server
app.use("/auth",githubRoute)
app.use("/", routes)



app.listen(3000,()=>{
  console.log("Server is On...")
})
