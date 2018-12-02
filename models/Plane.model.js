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
    type: Schema.Types.ObjectId,
    ref: 'Hangar'
  },
  flights: [{ type: Schema.Types.ObjectId, ref: 'Flight' }],
  based: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Plane', PlaneSchema);