const express= require ('express');
const router= express.Router();
const BookController= require('../controllers/bookController');

router.get('/',BookController.getBooks);

module.exports= router;

