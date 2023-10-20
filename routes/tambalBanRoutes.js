const express = require("express");
const router = express.Router();

const {
  getAllTambalBan,
  addTambalBan,
  test,
} = require("../controller/tambalBanController");
const validateToken = require("../middleware/validateTokenHandle");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let filename = file.originalname;
    cb(null, filename);
    req.body.foto = "http://localhost:3000/uploads/" + filename;
  },
});

const upload = multer({ storage: storage });
// console.log("upload >>>", upload);

router.use(validateToken);
router.get("/getAll", getAllTambalBan);
// router.post("/addTambalBan", addTambalBan);
router.post("/addTambalBan", upload.single("uploads"), addTambalBan);

module.exports = router;
