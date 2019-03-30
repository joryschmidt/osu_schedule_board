var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticeSchema = new Schema({
  created: {
    type: Date,
    default: Date.now()
  },
  text: {
    type: String
  }
});

module.exports = mongoose.model('Notice', NoticeSchema);