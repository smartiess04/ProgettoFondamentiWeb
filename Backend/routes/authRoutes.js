const express = require('express');
const router = express.Router();

const AuthController = require ('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');


router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.post('/logout' , verifyToken, AuthController.logout);

router.get('/refresh', AuthController.refresh);


module.exports = router;
