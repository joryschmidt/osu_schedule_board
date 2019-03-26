var express = require('express');
var router = express.Router();

var board_controller = require('../controllers/board.controller');

router.get('/', board_controller.getFlight);

router.get('/all', board_controller.getFlights);

router.get('/tail/:tail', board_controller.getFlightsByTail);

router.get('/transient', board_controller.getTransientFlights);

router.put('/', board_controller.updateFlight);

router.post('/new', board_controller.createFlight);

router.delete('/:id', board_controller.deleteFlight);

module.exports = router;