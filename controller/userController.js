const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password, role } = req.body;
  if (!fullname || !email || !password || !role) {
    res.status(400);
    throw new Error("Harap isi semua field!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email tersebut telah terdaftar");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    role: role,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data tidak valid");
  }
  //   res.json({ message: "Register user" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Harap isi semua field");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          fullname: user.fullname,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2 days" }
    );
    res.status(200).json({ fullName: user.fullname, accessToken: accessToken });
  } else {
    res.status(401);
    throw new Error("email atau password salah");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
