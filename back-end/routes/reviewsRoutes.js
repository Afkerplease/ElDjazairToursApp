const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router.route("/add").post(reviewsController.addReview);

router
  .route("/:tourId")
  .get(reviewsController.getAllReviews)
  .delete(reviewsController.deleteReview);
module.exports = router;
