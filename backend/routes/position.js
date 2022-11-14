var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/position");

// 직책

//직책 추가하기
router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body.name);

    await pool.query(sql.postPosition, [req.body.chrId, req.body.name]);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// 직책 정보 가져오기
router.get("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const data = await pool.query(sql.getPosition, [req.query.chrId]);
    //console.log(data[0]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
