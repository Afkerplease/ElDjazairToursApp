const User = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  //   const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ name, email, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
