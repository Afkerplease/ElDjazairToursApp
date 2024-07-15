const Tour = require("../models/tourModel");
exports.getAllTours = async (req, res) => {
  try {
    res.status(200).json({ message: "all tours here" });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    res.status(200).json({ message: "created tour" });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
