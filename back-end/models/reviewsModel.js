const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    tour_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: true,
    },
    rating: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    comment: {
      type: String,
      trim: true,
      required: [true, "A tour must have a description"],
    },
  },
  { timestamps: true }
);
const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;
