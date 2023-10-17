const TambalBan = require("../models/tambalBanModel");
const asyncHandler = require("express-async-handler");

const getAllTambalBan = asyncHandler(async (req, res) => {
  try {
    const tambalBan = await TambalBan.find({});
    res.status(200).json(tambalBan);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const addTambalBan = asyncHandler(async (req, res) => {
  try {
    const tambalBan = await TambalBan.create(req.body);
    res.status(200).json(tambalBan);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { getAllTambalBan, addTambalBan };
