const express= require ('express');
const router= express.Router();
const BookController= require('../controllers/bookController');
const verifyToken = require('../middleware/authMiddleware');


router.use(verifyToken);

router.get('/',BookController.getBooks);

router.post('/:id/favorite', BookController.toggleFavorite);

router.get('/biblioteca',BookController.getFavorites );

module.exports= router;

