var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/region");

// 구역

//구역 추가하기
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    await pool.query(sql.postRegion, [req.body.chrId, req.body.name]);

    return res.send(200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 구역 정보 가져오기
router.get("/", async (req, res, next) => {
  try {
    const data = await pool.query(sql.getRegion, [req.query.chrId]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
