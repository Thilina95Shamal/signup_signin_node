const express = require("express");
const mongoose = require("./config/db");
const routes = require("./routes");
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());

app.use(cookieParser());

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

app.use("/api", routes);

app.listen(3001,() => console.log('Server Started'));

