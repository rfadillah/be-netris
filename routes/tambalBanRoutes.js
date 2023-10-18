const express = require("express");
const router = express.Router();
const {
  getAllTambalBan,
  addTambalBan,
} = require("../controller/tambalBanController");
const validateToken = require("../middleware/validateTokenHandle");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const uploadPath = path.join(__dirname, "uploads");
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath);
//     }
//     console.log("Upload path:", uploadPath);
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

router.use(validateToken);
router.get("/getAll", getAllTambalBan);
router.post("/addTambalBan", addTambalBan);
// router.post("/addTambalBan", upload.single("image"), addTambalBan);

module.exports = router;
