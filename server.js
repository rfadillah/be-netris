require("dotenv").config();
const express = require("express");
const app = express();
const tambalBanRoute = require("./routes/tambalBanRoutes");
const userRoute = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const mongose = require("mongoose");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/tambalBan", tambalBanRoute);
app.use("/api/users", userRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/blog", function (req, res) {
  res.send("Hello blog, goblog");
});

app.use(errorMiddleware);

mongose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
