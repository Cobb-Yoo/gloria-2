var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/user");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const data = await pool.query(sql.getUserList);
    return res.json(data[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await pool.query(sql.postUser);
    return res.status(200).json("good");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
