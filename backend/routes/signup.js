var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/signup");

// 회원가입

/* GET users listing. */
router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body);
    //return res.status(200);
    const result = await pool.query(sql.postChurch, [
      req.body.id,
      req.body.pw,
      req.body.name,
      req.body.loc,
      req.body.email,
    ]);
    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
