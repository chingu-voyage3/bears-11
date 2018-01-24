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

//new idea. See models folder for Mongoose Schemas.
router.post('/submitIdea',(req,res)=>{
    new Idea({
        name: req.body.name,
        tier: req.body.tier,
        type: req.body.type,
        link: req.body.link,
        description: req.body.description
    }).save().then(()=>{
        res.redirect('/')
    });
});

module.exports = router;