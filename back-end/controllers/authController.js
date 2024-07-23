const User = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //  we check if ther is a user with the received email
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    //  we check password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    // if passwords are not the same
    if (!validPassword) return next(errorHandler(401, "wrong informations"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // we destruct the password from the document of the user we received to not send password to the client in the response
    const { password: hashedPassword, ...rest } = validUser._doc;
    //  rest here is the the rest of the document without the password
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
