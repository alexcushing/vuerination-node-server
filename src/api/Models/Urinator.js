const mongoose = require('mongoose');

// Not graphql just mongoose model
var urinatorSchema = new mongoose.Schema({
  name:{type:String, required:true},
  location:{type:String, required:false},
  bio:{type:String, required:false},
  img:{type:String, required:false},
  shyness:{type:Boolean, required:false},
  count:{type:Number, required:true},
  deleted:{type:Boolean, required:false}
})
export var Urinator = mongoose.model('Urinator', urinatorSchema);