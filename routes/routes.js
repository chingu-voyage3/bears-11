var express = require('express')
var router = express.Router();
var githubAuth = require("./githubAuth")
var app =express();

//app.set('view engine', 'ejs');
//app.use(express.static('public'));
//router.use("/auth", githubAuth)

router.get("/",(req,res)=>{
  res.render("index",{
    user: ""
  })
});

module.exports = router;
