var Flight = require('../models/Flight.model');
var Plane = require('../models/Plane.model');

// Mongoose callback handler function
function handler(res) {
  return function(err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
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
  
  
  Plane.find({ tail: req.body.tail }, function(err, plane) {
    if (err) console.log(err);
    else {
      console.log(plane);
      if (plane.length === 0) newFlight.transient = true;
      newFlight.save(handler(res));
    }
  });
};

exports.getFlight = function(req, res) {
  Flight.find({ _id: req.body.id }, handler(res));
};

exports.getFlights = function(req, res) {
  Flight.find(handler(res));
};

exports.getFlightsByTail = function(req, res) {
  Flight.find({ tail: req.params.tail }).sort({ date: 1 }).exec(handler(res));
}

exports.getTransientFlights = function(req, res) {
  Flight.find({ transient: true }).sort({ created: 1 }).exec(handler(res));
}

exports.updateFlight = function(req, res) {
  Flight.update({ _id: req.body._id }, { $set: {
    tail: req.body.tail,
    date: req.body.date,
    time: req.body.time,
    remarks: req.body.remarks
  }}, handler(res));
};

exports.deleteFlight = function(req, res) {
  Flight.remove({ _id: req.params.id }, handler(res));
};




// Planes

exports.createPlane = function(req, res) {
  
  var newPlane = new Plane();
  newPlane.tail = req.body.tail;
  newPlane.hangar = req.body.hangar;
  
  newPlane.save(handler(res));
};

exports.getPlane = function(req, res) {
  Plane.find({ _id: req.body._id }, handler(res));
};

exports.getPlanes = function(req, res) {
  Plane.find(handler(res));
};

exports.getPlanesByHangar = function(req, res) {
  Plane.find({ hangar: req.params.hangar }).sort({ tail: 1}).exec(handler(res));
}

exports.updatePlane = function(req, res) {
  Plane.update({ tail: req.body.tail }, { $set: { hangar: req.body.hangar }}, handler(res));
};

exports.deletePlane = function(req, res) {
  Plane.remove({ tail: req.body.tail }, handler(res));
};
