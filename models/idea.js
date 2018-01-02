var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = "mongodb://bears11:bb1@ds135966.mlab.com:35966/bears11";

mongoose.connect(uri);

//Notifies Console of Connection
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });
    

var idea = new Schema({
    name: String,
    tier: String,
    link: String
});

module.exports = mongoose.model("ideas", idea);
