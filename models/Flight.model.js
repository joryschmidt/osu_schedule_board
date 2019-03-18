var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  aircraft: {
    type: Schema.Types.ObjectId,
    ref: 'Plane'
  },
  tail: {
    type: String
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