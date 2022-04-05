var express = require("express");
var router = express.Router();
//const pool = require("../db/pool");
//const sql = require("../query/signin");

// 로그인

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    console.log("hello " + req.data);
    //const data = await pool.query(sql.getChurch);
    //return res.json(data[0]);
    return res.status(200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
