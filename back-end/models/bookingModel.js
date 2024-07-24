const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
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
    bookingDate: Date,
    status: {
      type: String,
      trim: true,
      default: "pending",
      required: [true, "A tour must have a description"],
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
