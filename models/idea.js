var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = process.env.DB;
//MongoDB/Mongoose deprecation warning for below.
mongoose.connect(uri);

//Notifies Console of Connection
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });
    

//Schema is used in routes folder. The Schema serves as the model for all Schemas of its own type.
//For example, all idea Schemas will have same keys.
var idea = new Schema({
    name: String,
    tier: String,
    type: String,
    link: String,
    description: String
});

module.exports = mongoose.model("ideas", idea);
