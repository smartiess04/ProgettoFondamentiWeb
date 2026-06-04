const express = require('express');
const router = express.Router();

// Importo il controller per l'autenticazione
const AuthController = require ('../controllers/authController');

// Route per la registrazione
router.post('/register', AuthController.register);

// Route per il login
router.post('/login', AuthController.login);

// esporto il router
module.exports = router;
