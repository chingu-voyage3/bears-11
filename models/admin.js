var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//uri
var uri = process.env.MONGODB_URI;

//connect to mongoDB
mongoose.connect(uri)

//Notifies Console of Connection
mongoose.connection.once('open',()=>{
console.log("Connected to Mongo via Mongoose")
}).on('error',(err)=>{
  console.log("Connection Error: " + err)
})

//Admin Account: authority will return true for admin and false for normal users
var Account = new Schema({
  username: String,
  authority: Boolean,
  githubId: String
})

var Account = mongoose.model('admin', Account)

module.exports = Account;
