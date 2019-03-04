var Flight = require('../models/Flight.model');
var Hangar = require('../models/Hangar.model');
var Plane = require('../models/Plane.model');

// Database response handler
function handler(err, data) {
  if (err) {
    console.log(err);
    res.status(500).end();
  } else res.json(data);
}

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
};

exports.getFlight = function(req, res) {
  Flight.find({ _id: req.body.id }, handler);
};

exports.getAllFlights = function(req, res) {
  Flight.find().exec(function(err, flights) {
    if (err) console.log(err);
    else res.json(flights);
  })
};

exports.updateFlight = function(req, res) {
  Flight.update({ _id: req.body.id }, { $set: {}}, function(err, flight) {
    if (err) res.status(500).end();
    else res.json(flight);
  });
};

exports.deleteFlight = function(req, res) {
  
};