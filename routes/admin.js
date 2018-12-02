var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user.controller');

router.post('/new', user_controller.create);

module.exports = router;