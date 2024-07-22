const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
    tour_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: false,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      required: [true, "A tour must have a description"],
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
