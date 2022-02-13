const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });
const cookieParser = require("cookie-parser");
const { deserializeUser } = require("./middleware/deserializeUser");

const app = express();

// DB connection
// require('./db/sequelize');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(deserializeUser);
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

module.exports = app;
