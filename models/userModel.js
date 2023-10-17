const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "fullname harus di isi!"],
    },
    email: {
      type: String,
      required: [true, "Eemail harus di isi!"],
      uniqe: [true, "Email ini sudah terdaftar"],
    },
    password: {
      type: String,
      required: [true, "Password harus di isi!"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
