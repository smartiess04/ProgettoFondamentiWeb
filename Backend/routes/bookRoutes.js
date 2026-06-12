const express= require ('express');
const router= express.Router();
const BookController= require('../controllers/bookController');
const verifyToken = require('../middleware/authMiddleware');

//lo metto all'inizio per farlo applicare a catena su tutti 
router.use(verifyToken);

router.get('/',BookController.getBooks);
//aggiungo POST per preferiti
router.post('/:id/favorite', BookController.toggleFavorite);

//aggiungo GET per 
router.get('/biblioteca',BookController.getFavorites );

module.exports= router;

