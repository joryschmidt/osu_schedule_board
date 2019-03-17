var express = require('express');
var router = express.Router();

var board_controller = require('../controllers/board.controller');

router.get('/', board_controller.getHangar);

router.get('/all', board_controller.getHangars);

router.post('/', board_controller.updateHangar);

router.post('/new', board_controller.createHangar);

router.get('/delete', board_controller.deleteHangar);

module.exports = router;