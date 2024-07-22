const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["user", "guide", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
    },
    preferences: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
