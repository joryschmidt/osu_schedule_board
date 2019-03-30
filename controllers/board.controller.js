var Flight = require('../models/Flight.model');
var Plane = require('../models/Plane.model');
var Notice = require('../models/Notice.model');

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
  if (req.body.hangared) newFlight.hangared = req.body.hangared;
  
  
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

exports.getHangarRequests = function(req, res) {
  Flight.find({ hangared: 'requested' }).sort({ created: 1 }).exec(handler(res));
}

exports.getHangaredAircraft = function(req, res) {
  Flight.find({ hangared: 'hangared' }, handler(res));
}

exports.updateFlight = function(req, res) {
  // if (!req.body.hangared) req.body.hangared = 'none';
  Flight.update({ _id: req.body._id }, { $set: {
    tail: req.body.tail,
    date: req.body.date,
    time: req.body.time,
    remarks: req.body.remarks,
    hangared: req.body.hangared
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
  Plane.find().sort({ tail: 1 }).exec(handler(res));
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

// Special Notices

exports.getNotice = function(req, res) {
  Notice.find({ _id: req.params.id }, handler(res));
}

exports.getAllNotices = function(req, res) {
  Notice.find(handler(res));
}

exports.updateNotice = function(req, res) {
  Notice.update({ _id: req.body._id }, { $set: { text: req.body.text }}, handler(res))
}

exports.createNotice = function(req, res) {
  
  var newNotice = new Notice();
  newNotice.text = req.body.text;
  
  newNotice.save(handler(res));
}

exports.deleteNotice = function(req, res) {
  Notice.remove({ _id: req.params.id }, handler(res));
}