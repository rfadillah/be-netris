const { response } = require("express");
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
const test = (req, res) => {
  console.log("test");
};

const addTambalBan = asyncHandler(async (req, res) => {
  const { nama, tipe, alamat, lat, long } = req.body;
  try {
    const tambalBan = await TambalBan.create({
      nama: nama,
      tipe: tipe,
      alamat: alamat,
      lat: lat,
      long: long,
      pictureUrl: req.body.foto,
    });
    res.status(200).json(tambalBan);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// const addTambalBan = asyncHandler(async (req, res) => {
//   try {
//     const tambalBan = await TambalBan.create(req.body);
//     res.status(200).json(tambalBan);
//   } catch (error) {
//     res.status(500);
//     throw new Error(error.message);
//   }
// });

module.exports = { getAllTambalBan, addTambalBan, test };
