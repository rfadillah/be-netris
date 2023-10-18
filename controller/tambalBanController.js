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

// const addTambalBan = asyncHandler(async (req, res) => {
//   console.log("masuk controller");
//   try {
//     const { nama, tipe, alamat, lat, long } = req.body;

//     const pictureUrl = req.file ? req.file.path : "";

//     const tambalBan = new TambalBan({
//       nama,
//       tipe,
//       alamat,
//       lat,
//       long,
//       pictureUrl,
//     });

//     await tambalBan.save();
//     console.log("nama >>>", nama);
//     console.log("tipe >>>", tipe);
//     console.log("alamat >>>", alamat);
//     console.log("lat >>>", lat);
//     console.log("long >>>", long);
//     console.log("pictureUrl >>>", pictureUrl);

//     res.status(200).json(tambalBan);
//   } catch (error) {
//     res.status(500);
//     throw new Error(error.message);
//   }
// });

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
