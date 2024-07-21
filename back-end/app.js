const express = require("express");
const bodyParser = require("body-parser");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/UserRoutes");
const authRouter = require("./routes/authRoute");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
//  error handler when using next()
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
module.exports = app;
