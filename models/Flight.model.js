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
    type: Date
  },
  remarks: {
    type: String
  }
  // ,
  // fuel_type: {
  //   type: String 
  // },
  // fuel_load: {
  //   type: Number
  // }
  // RON: Boolean,
  // WC: Boolean,
  // WA: Boolean,
  // CW: Boolean,
  // WFP: Boolean,
  // WP: Boolean,
  // CIP: Boolean
});

module.exports = mongoose.model('Flight', FlightSchema);