var express = require('express');
var router = express.Router();

var board_controller = require('../controllers/board.controller');

router.get('/', board_controller.getPlane);

router.get('/all', board_controller.getPlanes);

router.get('/hangar/:hangar', board_controller.getPlanesByHangar);

router.put('/', board_controller.updatePlane);

router.post('/new', board_controller.createPlane);

router.post('/delete', board_controller.deletePlane);

module.exports = router;