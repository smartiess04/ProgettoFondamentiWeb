const express= require ('express');
const router= express.Router();
const ProfiloController= require('../controllers/profiloController');
const verifyToken = require('../middleware/authMiddleware');

router.use(verifyToken);

router.get('/', ProfiloController.getInfoUser);

router.put('/profile', ProfiloController.modifyUser);

module.exports = router;

