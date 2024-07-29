const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;
      user.password = bcryptjs.hashSync(password, 10) || user.password;

      const updatedUser = await user.save();
      res.json({
        updatedUser,
        message: "User updated",
      });
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
