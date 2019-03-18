var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HangarSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  aircraft: [{ type: Schema.Types.ObjectId, ref: 'Plane' }]
});

module.exports = mongoose.model('Hangar', HangarSchema);