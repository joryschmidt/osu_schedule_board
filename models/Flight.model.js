var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  aircraft: {
    type: Schema.Types.ObjectId,
    ref: 'Plane'
  },
  date: {
    type: Date
  },
  remarks: {
    type: String
  },
  fuel_type: {
    type: String 
  },
  fuel_load: {
    type: Number
  }
  RON: Boolean,
  WC: Boolean,
  WA: Boolean,
  CW: Boolean,
  WFP: Boolean,
  WP: Boolean,
  FT: Boolean
  Coffee: Boolean,
  Ice: Boolean,
  Papers: Boolean
});

module.exports = mongoose.model('Flight', FlightSchema);