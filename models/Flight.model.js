var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  tail: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  time: {
    type: String 
  },
  remarks: {
    type: String
  }
});

module.exports = mongoose.model('Flight', FlightSchema);