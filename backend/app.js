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
const teamRouter = require("./routes/team");
const offerDataRouter = require("./routes/offerData");
const offerCateRouter = require("./routes/offerCate");
const invitationRouter = require("./routes/invitation");
const expenCateRouter = require("./routes/expenCate");
const expenDataRouter = require("./routes/expenData");

// routes
app.use("/", userRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/saint", saintRouter);
app.use("/region", regionRouter);
app.use("/position", positionRouter);
app.use("/team", teamRouter);
app.use("/offerData", offerDataRouter);
app.use("/offerCate", offerCateRouter);
app.use("/invitation", invitationRouter);
app.use("/expenCate", expenCateRouter);
app.use("/expenData", expenDataRouter);

module.exports = app;
