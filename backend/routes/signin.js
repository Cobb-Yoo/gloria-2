var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/signin");

// 로그인

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(sql.getChurch, [
      req.query.id,
      req.query.pw,
    ]);

    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
