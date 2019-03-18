var Flight = require('../models/Flight.model');
var Hangar = require('../models/Hangar.model');
var Plane = require('../models/Plane.model');

// Mongoose callback handler function
function handler(res) {
  return function(err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  }
}

// Flights

exports.createFlight = function(req, res) {
  var newFlight = new Flight();
  
  newFlight.tail = req.body.tail;
  newFlight.date = req.body.date;
  newFlight.time = req.body.time;
  newFlight.remarks = req.body.remarks;
  
  if (req.body.aircraft) newFlight.aircraft = req.body.aircraft;
  
  newFlight.save(handler(res));
};

exports.getFlight = function(req, res) {
  Flight.find({ _id: req.body.id }, handler(res));
};

exports.getFlights = function(req, res) {
  Flight.find().exec(handler(res));
};

exports.getFlightsByAircraft = function(req, res) {
  Flight.find({ aircraft: req.body.aircraft }, handler(res));
}

exports.updateFlight = function(req, res) {
  Flight.update({ _id: req.body.id }, { $set: {}}, handler(res));
};

exports.deleteFlight = function(req, res) {
  Flight.remove({ _id: req.body.id }, handler(res));
};

// Planes

exports.createPlane = function(req, res) {
  
  var newPlane = new Plane();
  newPlane.tail = req.body.tail;
  newPlane.hangar = req.body.hangar;
  if (req.body.based == "true") newPlane.based = true;
  newPlane.flights = [];
  
  newPlane.save(handler(res));
};

exports.getPlane = function(req, res) {
  Plane.find({ _id: req.body. id }, handler(res));
};

exports.getPlanes = function(req, res) {
  Plane.find().exec(handler(res));
};

exports.getBasedPlanes = function(req, res) {
  Plane.find({ based: true }, handler(res));
}

exports.getTransientPlanes = function(req, res) {
  Plane.find({ based: false }, handler(res));
}

exports.updatePlane = function(req, res) {
  Plane.update({ _id: req.body.id }, { $set: {}}, handler(res));
};

exports.deletePlane = function(req, res) {
  Plane.remove({ _id: req.body.id }, handler(res));
};

// Hangar

exports.createHangar = function(req, res) {
  var newHangar = new Hangar();
  newHangar.number = req.body.number;
  newHangar.aircraft = [];
  
  newHangar.save(handler(res));
};

exports.getHangar = function(req, res) {
  Hangar.find({ _id: req.body.id }, handler(res));
};

exports.getHangars = function(req, res) {
  Hangar.find().exec(handler(res));
};

exports.updateHangar = function(req, res) {
  Hangar.update({ _id: req.body.id }, handler(res));
};

exports.deleteHangar = function(req, res) {
  Hangar.remove({ _id: req.body. id}, handler(res));
}