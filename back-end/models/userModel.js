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
// userSchema.pre("save", async function (next) {
//   // only run this function if password was actually modified
//   if (!this.isModified("password")) return next();
//   //    hash password with cost of 12
//   this.password = await bcrypt.hash(this.password, 12);

//   next();
// });
const User = mongoose.model("User", userSchema);
module.exports = User;
