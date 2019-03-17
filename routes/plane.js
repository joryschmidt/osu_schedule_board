var express = require('express');
var router = express.Router();

var board_controller = require('../controllers/board.controller');

router.get('/', board_controller.getPlane);

router.get('/all', board_controller.getPlanes);

router.post('/', board_controller.updatePlane);

router.post('/new', board_controller.createPlane);

router.get('/delete', board_controller.deletePlane);

module.exports = router;