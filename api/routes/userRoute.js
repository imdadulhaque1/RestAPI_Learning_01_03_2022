const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerController)

router.post('/login', userController.loginController)

router.get('/list', userController.getAllUser)

module.exports = router;