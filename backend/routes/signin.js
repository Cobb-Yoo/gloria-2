var express = require("express");
var router = express.Router();
const pool = require("../db/pool");

// 로그인

/* GET users listing. */
router.post("/", async (req, res, next) => {
  var sqlStr = "SELECT * FROM church";
  await pool.query(sqlStr, [req.body.id, req.body.pw], (err, results) => {
    console.log(results.data);
    return res.json(results.data[0]);
  });

  //return res.status(200);
});

module.exports = router;
