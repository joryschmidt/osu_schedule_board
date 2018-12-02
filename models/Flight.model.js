var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  aircraft: [{ type: Schema.Types.ObjectId, ref: 'Plane' }]
});

module.exports = mongoose.model('Flight', FlightSchema);