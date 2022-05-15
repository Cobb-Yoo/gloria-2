var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/signin");
const crypto = require("crypto");
// 로그인

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(sql.getChurch, [
      req.query.id,
      crypto.createHash("sha512").update(req.query.pw).digest("base64"),
    ]);

    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
