var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user.controller');

router.get('/users', user_controller.getAllUsers);

router.post('/new', user_controller.create);

router.delete('/user/delete/:id', user_controller.deleteUser);

module.exports = router;