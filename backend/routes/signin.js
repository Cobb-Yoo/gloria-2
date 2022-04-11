var express = require("express");
var router = express.Router();
const pool = require("../db/pool");

// 로그인

/* GET users listing. */
router.post("/", async (req, res, next) => {
  console.log(req.body.id);
  console.log(req.body.pw);

  try {
    const result = await pool.query("SELECT * FROM CHURCH");
    console.log(result[0]);
    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
