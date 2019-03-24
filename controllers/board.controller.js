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
  
  newFlight.save(handler(res));
};

exports.getFlight = function(req, res) {
  Flight.find({ _id: req.body.id }, handler(res));
};

exports.getFlights = function(req, res) {
  Flight.find().exec(handler(res));
};

exports.getFlightsByTail = function(req, res) {
  Flight.find({ tail: req.params.tail }).sort({ date: 1 }).exec(handler(res));
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
  if (req.body.hangar) newPlane.hangar = req.body.hangar;
  if (req.body.based) newPlane.based = true;
  newPlane.flights = [];
  
  newPlane.save(function(err, plane) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (req.body.based) {
      Hangar.update({ number: req.body.hangar }, { $push: { aircraft: plane._id }}, handler(res));
    }
  });
};

exports.getPlane = function(req, res) {
  Plane.find({ _id: req.body. id }, handler(res));
};

exports.getPlanes = function(req, res) {
  Plane.find().exec(handler(res));
};

exports.getPlanesByHangar = function(req, res) {
  Plane.find({ hangar: req.params.hangar }, handler(res));
}

exports.getBasedPlanes = function(req, res) {
  Plane.find({ based: true }, handler(res));
}

exports.getTransientPlanes = function(req, res) {
  Plane.find({ based: false }, handler(res));
}

exports.updatePlane = function(req, res) {
  if (req.body.hangar) Plane.update({ _id: req.body.id }, { $set: { hangar: req.body.hangar }}, handler(res));
  else Plane.update({ _id: req.body.id }, { $unset: { hangar: "" }});
};

exports.deletePlane = function(req, res) {
  Plane.remove({ tail: req.body.tail }, function(err, plane) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      Hangar.update({ number: plane.hangar }, { $pull: { aircraft: plane._id }}, handler(res));
    }
  });
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

// perhaps delete all planes in hangar if hangar is deleted
exports.deleteHangar = function(req, res) {
  Hangar.remove({ number: req.body.number }, handler(res));
}