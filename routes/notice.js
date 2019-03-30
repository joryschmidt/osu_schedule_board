var express = require('express');
var router = express.Router();

var board_controller = require('../controllers/board.controller');

router.get('/notice/:id', board_controller.getNotice);

router.get('/', board_controller.getAllNotices);

router.post('/', board_controller.createNotice);

router.put('/', board_controller.updateNotice);

router.delete('/:id', board_controller.deleteNotice);

module.exports = router;