var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  tail: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  time: {
    type: String 
  },
  remarks: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  },
  hangarRequested: {
    type: Boolean
  },
  hangared: {
    type: Boolean
  },
  transient: {
    type: Boolean
  }
});

module.exports = mongoose.model('Flight', FlightSchema);