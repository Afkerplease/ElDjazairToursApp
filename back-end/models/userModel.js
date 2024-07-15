const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,

    lowercase: true,
  },

  role: {
    type: String,
    enum: ["user", "guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: 8,

    select: false,
  },
  preferences: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
userSchema.pre("save", async function (next) {
  // only run this function if password was actually modified
  if (!this.isModified("password")) return next();
  //    hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
