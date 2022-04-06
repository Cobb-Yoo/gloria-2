var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/signin");

// 로그인

/* GET users listing. */
router.post("/", async (req, res, next) => {
  try {
    console.log("hello");
    console.log(req.body);

    const data = await pool.query(sql.getChurch, [req.body.id, req.body.pw]);
    console.log(data);

    //return res.json(data[0]);
    return res.status(200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
