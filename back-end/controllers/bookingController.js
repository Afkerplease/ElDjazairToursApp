const mongoose = require("mongoose");
const Booking = require("../models/bookingModel");

exports.getBook = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await Booking.find({
      user_id: userId,
    })
      .populate("tour_id")
      .sort({
        createdAt: -1,
      })
      .lean();
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

exports.addBookingTour = async (req, res, next) => {
  try {
    await Booking.create(req.body);
    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.bookingId)) {
      return res.status(200).json({
        status: "fail",
        message: "Id is invalid",
      });
    }
    const { bookingId } = req.params;
    await Booking.findOneAndDelete({
      _id: bookingId,
    });
    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log("err : ", err.message);
    return next(err);
  }
};
