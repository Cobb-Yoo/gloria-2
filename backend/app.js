const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

//router imports
const userRouter = require("./routes/users");

// routes
app.use("/", userRouter);

module.exports = app;
