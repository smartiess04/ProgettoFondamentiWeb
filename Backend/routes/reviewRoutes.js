const express= require("express");
const router= express.Router();

const ReviewController= require("../controllers/reviewController");
const verifyToken = require('../middleware/authMiddleware');

router.use(verifyToken);

router.get("/:id/reviews",ReviewController.getReviews);
router.post("/:id/reviews",ReviewController.createReviews);
router.delete("/:id/reviews/:reviewId",ReviewController.deleteReviews);

module.exports=router;