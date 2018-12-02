var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user.controller');

// User create
router.post('/signup', user_controller.create);

// Session create and destroy
router.post('/login', user_controller.login);

router.get('/logout', user_controller.logout);

module.exports = router;