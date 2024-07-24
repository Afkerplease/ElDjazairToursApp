const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.route("/add").post(bookingController.addBookingTour);

router.route("/:userId").get(bookingController.getBook);

router.route("/delete-booking/:bookingId").delete(bookingController.deleteBook);
module.exports = router;
