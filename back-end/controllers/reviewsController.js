const Reviews = require("../models/reviewsModel");
exports.getAllReviews = async (req, res, next) => {
  try {
    const { tourId } = req.params;
    const data = await Reviews.find(
      {
        tour_id: tourId,
      },
      {
        tour_id: false,
        updatedAt: false,
      }
    )
      .populate("user_id", {
        _id: true,
        name: true,
      })
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

exports.addReview = async (req, res, next) => {
  try {
    const { body } = req;
    await Reviews.create(body);
    return res.status(200).json({
      status: "success",
      comment: body.comment,
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    await Reviews.findByIdAndDelete(req.params.tourId);
    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    return next(err);
  }
};
