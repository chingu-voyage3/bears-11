var express = require('express');
var bodyParser = require('body-parser');
var Idea = require('../models/idea');
var app = express();
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//home page
router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/build/index.html")
});

//new idea
router.post('/submitIdea',(req,res)=>{
    new Idea({
        name: req.body.name,
        tier: req.body.tier,
        link: req.body.link
    }).save().then(()=>{
        res.redirect('/')
    });
});

module.exports = router;