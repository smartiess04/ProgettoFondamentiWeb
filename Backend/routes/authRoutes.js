const express = require('express');
const router = express.Router();

const AuthController = require ('../controllers/authController');


/**
 * @swagger
 * /api/v1/test:
 *   get:
 *     summary: Rotta di prova per verificare che Swagger funzioni
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Il server risponde correttamente. Swagger è configurato alla perfezione!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tutto funziona!"
 */
router.get('/test', (req, res) => {
    res.status(200).json({ message: "Tutto funziona!" });
});

router.post('/register', AuthController.register);



router.post('/login', AuthController.login);

router.post('/logout', AuthController.logout);

router.post('/refresh', AuthController.refresh);


module.exports = router;
