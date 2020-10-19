var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user.controller');

// Session create and destroy
router.post('/login', user_controller.login);

router.get('/logout', user_controller.logout);

router.get('/getUser', user_controller.getUser);

module.exports = router;
