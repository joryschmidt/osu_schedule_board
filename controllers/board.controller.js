var Flight = require('../models/Flight.model');
var Hangar = require('../models/Hangar.model');
var Plane = require('../models/Plane.model');

// Create new flight information

exports.createFlight = function(req, res) {
  var newFlight = new Flight();
  
  newFlight.tail = req.body.tail;
  newFlight.date = req.body.date;
  newFlight.time = req.body.time;
  newFlight.remarks = req.body.remarks;
  
  newFlight.save(function(err, flight) {
    if (err) console.log(err);
    else {
      console.log(flight);
      res.json(flight);
    }
  });
}