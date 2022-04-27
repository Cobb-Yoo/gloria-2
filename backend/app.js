const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });

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
const signinRouter = require("./routes/signin");
const signupRouter = require("./routes/signup");
const saintRouter = require("./routes/saint");
const regionRouter = require("./routes/region");
const positionRouter = require("./routes/position");

// routes
app.use("/", userRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/saint", saintRouter);
app.use("/region", regionRouter);
app.use("/position", positionRouter);

module.exports = app;
