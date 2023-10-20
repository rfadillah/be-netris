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
    pictureUrl: {
      type: String,
      // default: "https://i.ibb.co/Y77Cwnx/dummy.png",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TambalBan = mongoose.model("TambalBan", tambalBanSchema);

module.exports = TambalBan;
