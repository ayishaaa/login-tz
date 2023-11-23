var express = require('express');
var router = express.Router();

var loginController = require('../controller/loginController');



router.post('/login', loginController.userLogin);


module.exports = router;