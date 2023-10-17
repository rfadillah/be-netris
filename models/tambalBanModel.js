const mongoose = require("mongoose");

const tambalBanSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: [true, "Masukkan nama tambal ban"],
    },
    tipe: {
      type: String,
      required: [true, "Masukkan tipe tambal ban (motor/mobil)"],
    },
    alamat: {
      type: String,
      required: [true, "Masukkan alamat"],
    },
    lat: {
      type: String,
      required: [true, "Perlu latitude"],
    },
    long: {
      type: String,
      required: [true, "Perlu longitude"],
    },
    // quantity: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // price: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // image: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TambalBan = mongoose.model("TambalBan", tambalBanSchema);

module.exports = TambalBan;
