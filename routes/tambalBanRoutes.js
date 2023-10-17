const express = require("express");
const router = express.Router();
const {
  getAllTambalBan,
  addTambalBan,
} = require("../controller/tambalBanController");
const validateToken = require("../middleware/validateTokenHandle");

router.use(validateToken);
router.get("/getAll", getAllTambalBan);
router.post("/addTambalBan", addTambalBan);

module.exports = router;
