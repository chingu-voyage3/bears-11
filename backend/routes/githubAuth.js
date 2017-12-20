var express = require('express')
var router = express.Router();
var routes = require("./routes")
var cookieSession = require("cookie-session")
var mongoose = require('mongoose');
var passport = require('passport');
var GithubStrategy = require("passport-github2").Strategy;
var adminUser = require("../models/admin")
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

router.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: ["l023f2oginsdlkbjenrbuerlibun34gunbo4g2"]
}))

router.use(passport.initialize());
router.use(passport.session());
router.use("/", routes)

//serialize and deserialize
passport.serializeUser((user, done)=>{
  console.log("serialized" +user.id)
  done(null,user.id);
})

passport.deserializeUser((id, done)=>{
  adminUser.findById(id).then((user)=>{
    console.log("deserialized")
    done(null,user)
  })
})


passport.use(new GithubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(token, tokenSecret, profile, done) {
//Callback... Finds current profile if exists else it creates new.
console.log("callback")
    adminUser.findOne({githubId: profile.id}).then((currentUser)=>{
      if(currentUser){
        console.log("Already a user");
        done(null,currentUser);
      }
      else{
        console.log("new...")
        new adminUser({
          username: profile.username,
          authority: true,
          githubId: profile.id
        }).save().then((newUser)=>{
          console.log("User created: "+newUser);
          done(null,newUser);
        });
      }
    })
  }
))



// Makes request from github
router.get('/github',
  passport.authenticate('github'));

// Receives data from github
  router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      res.render('index',{
        user: req.user.username
      });

    });

router.get('/auth/logout',(req,res)=>{

  req.logout();
  res.redirect('/')
})

module.exports = router;
