var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaneSchema = new Schema({
  tail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  hangar: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Plane', PlaneSchema);